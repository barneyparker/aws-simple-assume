/**
 * AWS Simple Assume
 * @module aws-simple-assume
 * @description This file contains the code to assume a role in another account
 * @example
 * import { assumeRole } from 'aws-simple-assume'
 * const credentials = await assumeRole('arn:aws:iam::123456789012:role/role-name', 'role-session-name')
 */
import { STS } from '@aws-sdk/client-sts'

/**
 * @typedef {object} Credentials
 * @property {string} accessKeyId      Access Key ID
 * @property {string} secretAccessKey  Secret Access Key
 * @property {string} sessionToken     Session Token
 * @property {Date}   [expiry]         Expiry Date
 */

/**
 * @typedef {object} Options
 * @property {string}      [externalId]   External ID
 * @property {Credentials} [credentials]  Credentials
 * @property {string}      [policy]       Policy
 */

/**
 * Assume a role in another account.
 * @function assumeRole
 * @param   {string}               roleArn          The ARN of the role to assume
 * @param   {string}               roleSessionName  The name of the role session
 * @param   {Options}              options          Options
 * @returns {Promise<Credentials>}                  credentials
 */
export const assumeRole = async (roleArn, roleSessionName, options) => {
  let sts
  if (options.credentials.accessKeyId !== undefined) {
    sts = new STS({ credentials: options.credentials, region: process.env.AWS_REGION })
  } else {
    sts = new STS({ region: process.env.AWS_REGION })
  }

  const params = {
    RoleArn: roleArn,
    RoleSessionName: roleSessionName,
    ExternalId: options.externalId,
    Policy: options.policy,
  }
  const credentials = await sts.assumeRole(params)

  return {
    accessKeyId: credentials.Credentials?.AccessKeyId,
    secretAccessKey: credentials.Credentials?.SecretAccessKey,
    sessionToken: credentials.Credentials?.SessionToken,
    expiry: credentials.Credentials?.Expiration,
  }
}
