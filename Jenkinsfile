pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat '''
                call npm ci
                '''
            }
        }

        stage('Build Ionic App') {
            steps {
                bat '''
                call npx ionic build
                '''
            }
        }

        stage('Sync Capacitor') {
            steps {
                bat '''
                call npx cap sync android
                '''
            }
        }

        stage('Create local.properties') {
            steps {
                dir('android') {
                    bat '''
                    echo sdk.dir=C:\\\\Users\\\\saravanan.m\\\\AppData\\\\Local\\\\Android\\\\Sdk > local.properties
                    '''
                }
            }
        }

        stage('Build APK') {
            steps {
                dir('android') {
                    bat '''
                    call gradlew.bat clean assembleDebug
                    '''
                }
            }
        }

        stage('Copy APK') {
            steps {
                bat '''
                if not exist D:\\APK_OUTPUT mkdir D:\\APK_OUTPUT

                copy /Y android\\app\\build\\outputs\\apk\\debug\\app-debug.apk D:\\APK_OUTPUT\\app-debug.apk
                '''
            }
        }
    }

    post {
        success {
            emailext(
                subject: 'APK Build Successful',
                body: '''
Hello,

The Ionic Android APK build completed successfully.

APK Location:
D:\\APK_OUTPUT\\app-debug.apk

Regards,
Jenkins
''',
                to: 'saranmj.vibes@gmail.com'
            )
        }

        failure {
            emailext(
                subject: 'APK Build Failed',
                body: '''
Hello,

The APK build failed.

Please check the Jenkins console output for details.

Regards,
Jenkins
''',
                to: 'saranmj.vibes@gmail.com'
            )
        }
    }
}
