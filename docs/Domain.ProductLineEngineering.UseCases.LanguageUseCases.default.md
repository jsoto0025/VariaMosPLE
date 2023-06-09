# Class: default

[Domain/ProductLineEngineering/UseCases/LanguageUseCases](../wiki/Domain.ProductLineEngineering.UseCases.LanguageUseCases).default

## Table of contents

### Constructors

- [constructor](../wiki/Domain.ProductLineEngineering.UseCases.LanguageUseCases.default#constructor)

### Properties

- [externalFunctionService](../wiki/Domain.ProductLineEngineering.UseCases.LanguageUseCases.default#externalfunctionservice)
- [languageService](../wiki/Domain.ProductLineEngineering.UseCases.LanguageUseCases.default#languageservice)

### Methods

- [callExternalFuntion](../wiki/Domain.ProductLineEngineering.UseCases.LanguageUseCases.default#callexternalfuntion)
- [createLanguage](../wiki/Domain.ProductLineEngineering.UseCases.LanguageUseCases.default#createlanguage)
- [deleteLanguage](../wiki/Domain.ProductLineEngineering.UseCases.LanguageUseCases.default#deletelanguage)
- [getExternalFunctions](../wiki/Domain.ProductLineEngineering.UseCases.LanguageUseCases.default#getexternalfunctions)
- [getLanguageByName](../wiki/Domain.ProductLineEngineering.UseCases.LanguageUseCases.default#getlanguagebyname)
- [getLanguagesByType](../wiki/Domain.ProductLineEngineering.UseCases.LanguageUseCases.default#getlanguagesbytype)
- [getLanguagesDetail](../wiki/Domain.ProductLineEngineering.UseCases.LanguageUseCases.default#getlanguagesdetail)
- [getLanguagesDetailCll](../wiki/Domain.ProductLineEngineering.UseCases.LanguageUseCases.default#getlanguagesdetailcll)
- [updateLanguage](../wiki/Domain.ProductLineEngineering.UseCases.LanguageUseCases.default#updatelanguage)

## Constructors

### constructor

• **new default**()

## Properties

### externalFunctionService

• `Private` **externalFunctionService**: [`default`](../wiki/DataProvider.Services.externalFunctionService.default)

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/LanguageUseCases.tsx:8](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/LanguageUseCases.tsx#L8)

___

### languageService

• `Private` **languageService**: [`default`](../wiki/DataProvider.Services.languageService.default)

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/LanguageUseCases.tsx:7](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/LanguageUseCases.tsx#L7)

## Methods

### callExternalFuntion

▸ **callExternalFuntion**(`callback`, `externalFunction`): `any`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `any` |
| `externalFunction` | [`ExternalFuntion`](../wiki/Domain.ProductLineEngineering.Entities.ExternalFuntion.ExternalFuntion) |

#### Returns

`any`[]

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/LanguageUseCases.tsx:44](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/LanguageUseCases.tsx#L44)

___

### createLanguage

▸ **createLanguage**(`callback`, `language`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `any` |
| `language` | [`Language`](../wiki/Domain.ProductLineEngineering.Entities.Language.Language) |

#### Returns

`void`

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/LanguageUseCases.tsx:32](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/LanguageUseCases.tsx#L32)

___

### deleteLanguage

▸ **deleteLanguage**(`callback`, `languageId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `any` |
| `languageId` | `string` |

#### Returns

`void`

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/LanguageUseCases.tsx:40](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/LanguageUseCases.tsx#L40)

___

### getExternalFunctions

▸ **getExternalFunctions**(`callback`, `languageId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `any` |
| `languageId` | `number` |

#### Returns

`void`

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/LanguageUseCases.tsx:51](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/LanguageUseCases.tsx#L51)

___

### getLanguageByName

▸ **getLanguageByName**(`languageName`, `languages`): [`Language`](../wiki/Domain.ProductLineEngineering.Entities.Language.Language)

#### Parameters

| Name | Type |
| :------ | :------ |
| `languageName` | `string` |
| `languages` | [`Language`](../wiki/Domain.ProductLineEngineering.Entities.Language.Language)[] |

#### Returns

[`Language`](../wiki/Domain.ProductLineEngineering.Entities.Language.Language)

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/LanguageUseCases.tsx:18](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/LanguageUseCases.tsx#L18)

___

### getLanguagesByType

▸ **getLanguagesByType**(`languageType`, `languages`): [`Language`](../wiki/Domain.ProductLineEngineering.Entities.Language.Language)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `languageType` | `string` |
| `languages` | [`Language`](../wiki/Domain.ProductLineEngineering.Entities.Language.Language)[] |

#### Returns

[`Language`](../wiki/Domain.ProductLineEngineering.Entities.Language.Language)[]

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/LanguageUseCases.tsx:11](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/LanguageUseCases.tsx#L11)

___

### getLanguagesDetail

▸ **getLanguagesDetail**(): [`Language`](../wiki/Domain.ProductLineEngineering.Entities.Language.Language)[]

#### Returns

[`Language`](../wiki/Domain.ProductLineEngineering.Entities.Language.Language)[]

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/LanguageUseCases.tsx:25](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/LanguageUseCases.tsx#L25)

___

### getLanguagesDetailCll

▸ **getLanguagesDetailCll**(`callBack`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callBack` | `any` |

#### Returns

`void`

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/LanguageUseCases.tsx:28](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/LanguageUseCases.tsx#L28)

___

### updateLanguage

▸ **updateLanguage**(`callback`, `language`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `any` |
| `language` | [`Language`](../wiki/Domain.ProductLineEngineering.Entities.Language.Language) |

#### Returns

`void`

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/LanguageUseCases.tsx:36](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/LanguageUseCases.tsx#L36)
