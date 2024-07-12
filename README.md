# aws-simple-assume

Simple AWS Role Assumption

## Install

```bash
npm install aws-simple-assume
```

# API Reference
This file contains the code to assume a role in another account

**Example**  
```js
import { assumeRole } from 'aws-simple-assume'
const credentials = await assumeRole('arn:aws:iam::123456789012:role/role-name', 'role-session-name')
```
<a name="module_aws-simple-assume..assumeRole"></a>

### aws-simple-assume~assumeRole(RoleArn, RoleSessionName, options) ⇒ <code>Promise.&lt;Credentials&gt;</code>
Assume a role in another account.

**Kind**: inner method of [<code>aws-simple-assume</code>](#module_aws-simple-assume)  
**Returns**: <code>Promise.&lt;Credentials&gt;</code> - credentials  

| Param | Type | Description |
| --- | --- | --- |
| RoleArn | <code>string</code> | The ARN of the role to assume |
| RoleSessionName | <code>string</code> | The name of the role session |
| options | <code>Options</code> | Options |

<a name="module_aws-simple-assume..Credentials"></a>

### aws-simple-assume~Credentials : <code>object</code>
**Kind**: inner typedef of [<code>aws-simple-assume</code>](#module_aws-simple-assume)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| accessKeyId | <code>string</code> | Access Key ID |
| secretAccessKey | <code>string</code> | Secret Access Key |
| sessionToken | <code>string</code> | Session Token |
| [expiry] | <code>Date</code> | Expiry Date |

<a name="module_aws-simple-assume..Options"></a>

### aws-simple-assume~Options : <code>object</code>
**Kind**: inner typedef of [<code>aws-simple-assume</code>](#module_aws-simple-assume)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [ExternalId] | <code>string</code> | External ID |
| [Credentials] | <code>Credentials</code> | Credentials |
| [Policy] | <code>string</code> | Policy |


## License

[MIT ©](https://github.com/barneyparker/aws-simple-assume/LICENSE)
