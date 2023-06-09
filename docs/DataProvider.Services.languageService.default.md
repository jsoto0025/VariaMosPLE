# Class: default

[DataProvider/Services/languageService](../wiki/DataProvider.Services.languageService).default

## Table of contents

### Constructors

- [constructor](../wiki/DataProvider.Services.languageService.default#constructor)

### Properties

- [apiVariamos](../wiki/DataProvider.Services.languageService.default#apivariamos)

### Methods

- [createLanguage](../wiki/DataProvider.Services.languageService.default#createlanguage)
- [deleteLanguage](../wiki/DataProvider.Services.languageService.default#deletelanguage)
- [getLanguages](../wiki/DataProvider.Services.languageService.default#getlanguages)
- [getLanguagesDetail](../wiki/DataProvider.Services.languageService.default#getlanguagesdetail)
- [updateLanguage](../wiki/DataProvider.Services.languageService.default#updatelanguage)

## Constructors

### constructor

• **new default**()

## Properties

### apiVariamos

• **apiVariamos**: `AxiosInstance`

#### Defined in

[src/DataProvider/Services/languageService.tsx:6](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/DataProvider/Services/languageService.tsx#L6)

## Methods

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

[src/DataProvider/Services/languageService.tsx:29](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/DataProvider/Services/languageService.tsx#L29)

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

[src/DataProvider/Services/languageService.tsx:62](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/DataProvider/Services/languageService.tsx#L62)

___

### getLanguages

▸ **getLanguages**(`callBack`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callBack` | `any` |

#### Returns

`void`

#### Defined in

[src/DataProvider/Services/languageService.tsx:129](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/DataProvider/Services/languageService.tsx#L129)

___

### getLanguagesDetail

▸ **getLanguagesDetail**(): [`Language`](../wiki/Domain.ProductLineEngineering.Entities.Language.Language)[]

#### Returns

[`Language`](../wiki/Domain.ProductLineEngineering.Entities.Language.Language)[]

#### Defined in

[src/DataProvider/Services/languageService.tsx:10](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/DataProvider/Services/languageService.tsx#L10)

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

[src/DataProvider/Services/languageService.tsx:95](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/DataProvider/Services/languageService.tsx#L95)
