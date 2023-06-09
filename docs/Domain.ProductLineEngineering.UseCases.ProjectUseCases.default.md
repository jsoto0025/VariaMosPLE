# Class: default

[Domain/ProductLineEngineering/UseCases/ProjectUseCases](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases).default

## Table of contents

### Constructors

- [constructor](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#constructor)

### Methods

- [createAdaptation](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#createadaptation)
- [createAdaptationModel](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#createadaptationmodel)
- [createApplication](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#createapplication)
- [createApplicationEngineeringModel](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#createapplicationengineeringmodel)
- [createApplicationModel](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#createapplicationmodel)
- [createDomainEngineeringModel](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#createdomainengineeringmodel)
- [createLps](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#createlps)
- [createProject](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#createproject)
- [createRelationship](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#createrelationship)
- [deleteItemProject](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#deleteitemproject)
- [deleteProject](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#deleteproject)
- [deleteTreeItemSelected](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#deletetreeitemselected)
- [renameItemProject](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#renameitemproject)
- [saveProject](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#saveproject)
- [findAdaptationFolder](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#findadaptationfolder)
- [findApplicationFolder](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#findapplicationfolder)
- [findDomainFolder](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#finddomainfolder)
- [findModelByName](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#findmodelbyname)
- [findModelElementById](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#findmodelelementbyid)
- [findModelElementByIdInProject](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#findmodelelementbyidinproject)
- [findModelRelationshipById](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#findmodelrelationshipbyid)
- [generateId](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#generateid)
- [removeModelElementById](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#removemodelelementbyid)
- [removeModelRelationshipById](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#removemodelrelationshipbyid)
- [removeModelRelationshipsOfElement](../wiki/Domain.ProductLineEngineering.UseCases.ProjectUseCases.default#removemodelrelationshipsofelement)

## Constructors

### constructor

• **new default**()

## Methods

### createAdaptation

▸ **createAdaptation**(`project`, `adaptationName`, `productLine`, `application`): [`Adaptation`](../wiki/Domain.ProductLineEngineering.Entities.Adaptation.Adaptation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | [`Project`](../wiki/Domain.ProductLineEngineering.Entities.Project.Project) |
| `adaptationName` | `string` |
| `productLine` | `number` |
| `application` | `number` |

#### Returns

[`Adaptation`](../wiki/Domain.ProductLineEngineering.Entities.Adaptation.Adaptation)

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:192](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L192)

___

### createAdaptationModel

▸ **createAdaptationModel**(`project`, `languageType`, `productLine`, `application`, `adaptation`): [`Model`](../wiki/Domain.ProductLineEngineering.Entities.Model.Model)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | [`Project`](../wiki/Domain.ProductLineEngineering.Entities.Project.Project) |
| `languageType` | `string` |
| `productLine` | `number` |
| `application` | `number` |
| `adaptation` | `number` |

#### Returns

[`Model`](../wiki/Domain.ProductLineEngineering.Entities.Model.Model)

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:256](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L256)

___

### createApplication

▸ **createApplication**(`project`, `applicationName`, `productLine`): [`Application`](../wiki/Domain.ProductLineEngineering.Entities.Application.Application)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | [`Project`](../wiki/Domain.ProductLineEngineering.Entities.Project.Project) |
| `applicationName` | `string` |
| `productLine` | `number` |

#### Returns

[`Application`](../wiki/Domain.ProductLineEngineering.Entities.Application.Application)

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:175](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L175)

___

### createApplicationEngineeringModel

▸ **createApplicationEngineeringModel**(`project`, `languageType`, `productLine`): [`Model`](../wiki/Domain.ProductLineEngineering.Entities.Model.Model)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | [`Project`](../wiki/Domain.ProductLineEngineering.Entities.Project.Project) |
| `languageType` | `string` |
| `productLine` | `number` |

#### Returns

[`Model`](../wiki/Domain.ProductLineEngineering.Entities.Model.Model)

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:222](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L222)

___

### createApplicationModel

▸ **createApplicationModel**(`project`, `languageType`, `productLine`, `application`): [`Model`](../wiki/Domain.ProductLineEngineering.Entities.Model.Model)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | [`Project`](../wiki/Domain.ProductLineEngineering.Entities.Project.Project) |
| `languageType` | `string` |
| `productLine` | `number` |
| `application` | `number` |

#### Returns

[`Model`](../wiki/Domain.ProductLineEngineering.Entities.Model.Model)

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:237](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L237)

___

### createDomainEngineeringModel

▸ **createDomainEngineeringModel**(`project`, `languageType`, `productLine`): [`Model`](../wiki/Domain.ProductLineEngineering.Entities.Model.Model)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | [`Project`](../wiki/Domain.ProductLineEngineering.Entities.Project.Project) |
| `languageType` | `string` |
| `productLine` | `number` |

#### Returns

[`Model`](../wiki/Domain.ProductLineEngineering.Entities.Model.Model)

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:209](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L209)

___

### createLps

▸ **createLps**(`project`, `producLineName`): [`ProductLine`](../wiki/Domain.ProductLineEngineering.Entities.ProductLine.ProductLine)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | [`Project`](../wiki/Domain.ProductLineEngineering.Entities.Project.Project) |
| `producLineName` | `string` |

#### Returns

[`ProductLine`](../wiki/Domain.ProductLineEngineering.Entities.ProductLine.ProductLine)

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:166](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L166)

___

### createProject

▸ **createProject**(`projectName`): [`Project`](../wiki/Domain.ProductLineEngineering.Entities.Project.Project)

#### Parameters

| Name | Type |
| :------ | :------ |
| `projectName` | `string` |

#### Returns

[`Project`](../wiki/Domain.ProductLineEngineering.Entities.Project.Project)

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:14](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L14)

___

### createRelationship

▸ **createRelationship**(`model`, `name`, `type`, `sourceId`, `targetId`, `points?`, `min`, `max`, `properties`): [`Relationship`](../wiki/Domain.ProductLineEngineering.Entities.Relationship.Relationship)

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `model` | [`Model`](../wiki/Domain.ProductLineEngineering.Entities.Model.Model) | `undefined` |
| `name` | `string` | `undefined` |
| `type` | `string` | `undefined` |
| `sourceId` | `string` | `undefined` |
| `targetId` | `string` | `undefined` |
| `points` | [`Point`](../wiki/Domain.ProductLineEngineering.Entities.Point.Point)[] | `[]` |
| `min` | `number` | `undefined` |
| `max` | `number` | `undefined` |
| `properties` | [`Property`](../wiki/Domain.ProductLineEngineering.Entities.Property.Property)[] | `undefined` |

#### Returns

[`Relationship`](../wiki/Domain.ProductLineEngineering.Entities.Relationship.Relationship)

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:392](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L392)

___

### deleteItemProject

▸ **deleteItemProject**(`project`, `idItem`): [`Project`](../wiki/Domain.ProductLineEngineering.Entities.Project.Project)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | [`Project`](../wiki/Domain.ProductLineEngineering.Entities.Project.Project) |
| `idItem` | `string` |

#### Returns

[`Project`](../wiki/Domain.ProductLineEngineering.Entities.Project.Project)

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:62](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L62)

___

### deleteProject

▸ **deleteProject**(): `void`

#### Returns

`void`

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:427](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L427)

___

### deleteTreeItemSelected

▸ **deleteTreeItemSelected**(`project`, `language`, `productLine`, `application`, `adaptation`, `itemDelete`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | [`Project`](../wiki/Domain.ProductLineEngineering.Entities.Project.Project) |
| `language` | `string` |
| `productLine` | `number` |
| `application` | `number` |
| `adaptation` | `number` |
| `itemDelete` | `string` \| `number` |

#### Returns

`void`

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:413](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L413)

___

### renameItemProject

▸ **renameItemProject**(`project`, `idItem`, `newName`): [`Project`](../wiki/Domain.ProductLineEngineering.Entities.Project.Project)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | [`Project`](../wiki/Domain.ProductLineEngineering.Entities.Project.Project) |
| `idItem` | `string` |
| `newName` | `string` |

#### Returns

[`Project`](../wiki/Domain.ProductLineEngineering.Entities.Project.Project)

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:19](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L19)

___

### saveProject

▸ **saveProject**(`project`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | [`Project`](../wiki/Domain.ProductLineEngineering.Entities.Project.Project) |

#### Returns

`void`

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:422](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L422)

___

### findAdaptationFolder

▸ `Static` **findAdaptationFolder**(`project`, `modelId`): [`Adaptation`](../wiki/Domain.ProductLineEngineering.Entities.Adaptation.Adaptation)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | [`Project`](../wiki/Domain.ProductLineEngineering.Entities.Project.Project) |
| `modelId` | `string` |

#### Returns

[`Adaptation`](../wiki/Domain.ProductLineEngineering.Entities.Adaptation.Adaptation)

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:374](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L374)

___

### findApplicationFolder

▸ `Static` **findApplicationFolder**(`project`, `modelId`): [`Application`](../wiki/Domain.ProductLineEngineering.Entities.Application.Application)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | [`Project`](../wiki/Domain.ProductLineEngineering.Entities.Project.Project) |
| `modelId` | `string` |

#### Returns

[`Application`](../wiki/Domain.ProductLineEngineering.Entities.Application.Application)

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:350](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L350)

___

### findDomainFolder

▸ `Static` **findDomainFolder**(`project`, `modelId`): [`DomainEngineering`](../wiki/Domain.ProductLineEngineering.Entities.DomainEngineering.DomainEngineering)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | [`Project`](../wiki/Domain.ProductLineEngineering.Entities.Project.Project) |
| `modelId` | `string` |

#### Returns

[`DomainEngineering`](../wiki/Domain.ProductLineEngineering.Entities.DomainEngineering.DomainEngineering)

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:327](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L327)

___

### findModelByName

▸ `Static` **findModelByName**(`project`, `type`, `modelName`, `modelNeighborId`): [`Model`](../wiki/Domain.ProductLineEngineering.Entities.Model.Model)

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | [`Project`](../wiki/Domain.ProductLineEngineering.Entities.Project.Project) |
| `type` | `string` |
| `modelName` | `string` |
| `modelNeighborId` | `string` |

#### Returns

[`Model`](../wiki/Domain.ProductLineEngineering.Entities.Model.Model)

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:276](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L276)

___

### findModelElementById

▸ `Static` **findModelElementById**(`model`, `uid`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`Model`](../wiki/Domain.ProductLineEngineering.Entities.Model.Model) |
| `uid` | `any` |

#### Returns

`any`

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:448](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L448)

___

### findModelElementByIdInProject

▸ `Static` **findModelElementByIdInProject**(`project`, `id`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | [`Project`](../wiki/Domain.ProductLineEngineering.Entities.Project.Project) |
| `id` | `any` |

#### Returns

`any`

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:473](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L473)

___

### findModelRelationshipById

▸ `Static` **findModelRelationshipById**(`model`, `uid`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`Model`](../wiki/Domain.ProductLineEngineering.Entities.Model.Model) |
| `uid` | `any` |

#### Returns

`any`

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:460](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L460)

___

### generateId

▸ `Static` **generateId**(): `string`

#### Returns

`string`

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:435](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L435)

___

### removeModelElementById

▸ `Static` **removeModelElementById**(`model`, `uid`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`Model`](../wiki/Domain.ProductLineEngineering.Entities.Model.Model) |
| `uid` | `any` |

#### Returns

`void`

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:507](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L507)

___

### removeModelRelationshipById

▸ `Static` **removeModelRelationshipById**(`model`, `uid`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`Model`](../wiki/Domain.ProductLineEngineering.Entities.Model.Model) |
| `uid` | `any` |

#### Returns

`void`

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:520](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L520)

___

### removeModelRelationshipsOfElement

▸ `Static` **removeModelRelationshipsOfElement**(`model`, `uid`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`Model`](../wiki/Domain.ProductLineEngineering.Entities.Model.Model) |
| `uid` | `any` |

#### Returns

`void`

#### Defined in

[src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx:532](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/Domain/ProductLineEngineering/UseCases/ProjectUseCases.tsx#L532)
