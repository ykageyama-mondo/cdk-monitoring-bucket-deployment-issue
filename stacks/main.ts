import {App} from 'aws-cdk-lib'
import {CustomStack} from './customStack'

const app = new App()

new CustomStack(app, 'Stack')