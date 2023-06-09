# Class: default

[UI/ProjectManagement/LanguageManagement](../wiki/UI.ProjectManagement.LanguageManagement).default

## Hierarchy

- `Component`<`Props`, `State`\>

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](../wiki/UI.ProjectManagement.LanguageManagement.default#constructor)

### Properties

- [context](../wiki/UI.ProjectManagement.LanguageManagement.default#context)
- [props](../wiki/UI.ProjectManagement.LanguageManagement.default#props)
- [refs](../wiki/UI.ProjectManagement.LanguageManagement.default#refs)
- [state](../wiki/UI.ProjectManagement.LanguageManagement.default#state)
- [contextType](../wiki/UI.ProjectManagement.LanguageManagement.default#contexttype)

### Methods

- [UNSAFE\_componentWillMount](../wiki/UI.ProjectManagement.LanguageManagement.default#unsafe_componentwillmount)
- [UNSAFE\_componentWillReceiveProps](../wiki/UI.ProjectManagement.LanguageManagement.default#unsafe_componentwillreceiveprops)
- [UNSAFE\_componentWillUpdate](../wiki/UI.ProjectManagement.LanguageManagement.default#unsafe_componentwillupdate)
- [activeCreate](../wiki/UI.ProjectManagement.LanguageManagement.default#activecreate)
- [activeDelete](../wiki/UI.ProjectManagement.LanguageManagement.default#activedelete)
- [activeUpdate](../wiki/UI.ProjectManagement.LanguageManagement.default#activeupdate)
- [clearForm](../wiki/UI.ProjectManagement.LanguageManagement.default#clearform)
- [componentDidCatch](../wiki/UI.ProjectManagement.LanguageManagement.default#componentdidcatch)
- [componentDidMount](../wiki/UI.ProjectManagement.LanguageManagement.default#componentdidmount)
- [componentDidUpdate](../wiki/UI.ProjectManagement.LanguageManagement.default#componentdidupdate)
- [componentWillMount](../wiki/UI.ProjectManagement.LanguageManagement.default#componentwillmount)
- [componentWillReceiveProps](../wiki/UI.ProjectManagement.LanguageManagement.default#componentwillreceiveprops)
- [componentWillUnmount](../wiki/UI.ProjectManagement.LanguageManagement.default#componentwillunmount)
- [componentWillUpdate](../wiki/UI.ProjectManagement.LanguageManagement.default#componentwillupdate)
- [createLanguage](../wiki/UI.ProjectManagement.LanguageManagement.default#createlanguage)
- [deleteLanguage](../wiki/UI.ProjectManagement.LanguageManagement.default#deletelanguage)
- [forceUpdate](../wiki/UI.ProjectManagement.LanguageManagement.default#forceupdate)
- [getSnapshotBeforeUpdate](../wiki/UI.ProjectManagement.LanguageManagement.default#getsnapshotbeforeupdate)
- [projectService\_addListener](../wiki/UI.ProjectManagement.LanguageManagement.default#projectservice_addlistener)
- [refreshLanguages](../wiki/UI.ProjectManagement.LanguageManagement.default#refreshlanguages)
- [render](../wiki/UI.ProjectManagement.LanguageManagement.default#render)
- [setState](../wiki/UI.ProjectManagement.LanguageManagement.default#setstate)
- [shouldComponentUpdate](../wiki/UI.ProjectManagement.LanguageManagement.default#shouldcomponentupdate)
- [updateAbstractSyntax](../wiki/UI.ProjectManagement.LanguageManagement.default#updateabstractsyntax)
- [updateConcreteSyntax](../wiki/UI.ProjectManagement.LanguageManagement.default#updateconcretesyntax)
- [updateLanguage](../wiki/UI.ProjectManagement.LanguageManagement.default#updatelanguage)
- [updateLanguageListSelected](../wiki/UI.ProjectManagement.LanguageManagement.default#updatelanguagelistselected)
- [updateName](../wiki/UI.ProjectManagement.LanguageManagement.default#updatename)
- [updateStateAccept](../wiki/UI.ProjectManagement.LanguageManagement.default#updatestateaccept)
- [updateType](../wiki/UI.ProjectManagement.LanguageManagement.default#updatetype)
- [validateLanguageExist](../wiki/UI.ProjectManagement.LanguageManagement.default#validatelanguageexist)
- [validateParamsNull](../wiki/UI.ProjectManagement.LanguageManagement.default#validateparamsnull)
- [validateSchemaAbstractSyntax](../wiki/UI.ProjectManagement.LanguageManagement.default#validateschemaabstractsyntax)
- [validateSchemaConcreteSyntax](../wiki/UI.ProjectManagement.LanguageManagement.default#validateschemaconcretesyntax)

## Constructors

### constructor

• **new default**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `any` |

#### Overrides

Component&lt;Props, State\&gt;.constructor

#### Defined in

[src/UI/ProjectManagement/LanguageManagement.tsx:32](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/ProjectManagement/LanguageManagement.tsx#L32)

## Properties

### context

• **context**: `any`

If using the new style context, re-declare this in your class to be the
`React.ContextType` of your `static contextType`.
Should be used with type annotation or static contextType.

```ts
static contextType = MyContext
// For TS pre-3.7:
context!: React.ContextType<typeof MyContext>
// For TS 3.7 and above:
declare context: React.ContextType<typeof MyContext>
```

**`See`**

https://reactjs.org/docs/context.html

#### Inherited from

Component.context

#### Defined in

node_modules/@types/react/index.d.ts:479

___

### props

• `Readonly` **props**: `Readonly`<`Props`\> & `Readonly`<{ `children?`: `ReactNode`  }\>

#### Inherited from

Component.props

#### Defined in

node_modules/@types/react/index.d.ts:504

___

### refs

• **refs**: `Object`

**`Deprecated`**

https://reactjs.org/docs/refs-and-the-dom.html#legacy-api-string-refs

#### Index signature

▪ [key: `string`]: `ReactInstance`

#### Inherited from

Component.refs

#### Defined in

node_modules/@types/react/index.d.ts:510

___

### state

• **state**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `formLanguage` | { `abstractSyntax`: `string` = ""; `concreteSyntax`: `string` = ""; `name`: `string` = ""; `stateAccept`: `string` = "PENDING"; `type`: `string` = "DOMAIN" } |
| `formLanguage.abstractSyntax` | `string` |
| `formLanguage.concreteSyntax` | `string` |
| `formLanguage.name` | `string` |
| `formLanguage.stateAccept` | `string` |
| `formLanguage.type` | `string` |
| `languageListSelected` | `string` |
| `languages` | `any`[] |
| `lastNameUpdate` | `string` |

#### Overrides

Component.state

#### Defined in

[src/UI/ProjectManagement/LanguageManagement.tsx:19](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/ProjectManagement/LanguageManagement.tsx#L19)

___

### contextType

▪ `Static` `Optional` **contextType**: `Context`<`any`\>

If set, `this.context` will be set at runtime to the current value of the given Context.

Usage:

```ts
type MyContext = number
const Ctx = React.createContext<MyContext>(0)

class Foo extends React.Component {
  static contextType = Ctx
  context!: React.ContextType<typeof Ctx>
  render () {
    return <>My context's value: {this.context}</>;
  }
}
```

**`See`**

https://reactjs.org/docs/context.html#classcontexttype

#### Inherited from

Component.contextType

#### Defined in

node_modules/@types/react/index.d.ts:461

## Methods

### UNSAFE\_componentWillMount

▸ `Optional` **UNSAFE_componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`Deprecated`**

16.3, use componentDidMount or the constructor instead

**`See`**

 - https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
 - https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Returns

`void`

#### Inherited from

Component.UNSAFE\_componentWillMount

#### Defined in

node_modules/@types/react/index.d.ts:717

___

### UNSAFE\_componentWillReceiveProps

▸ `Optional` **UNSAFE_componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`Deprecated`**

16.3, use static getDerivedStateFromProps instead

**`See`**

 - https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
 - https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`Props`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

Component.UNSAFE\_componentWillReceiveProps

#### Defined in

node_modules/@types/react/index.d.ts:749

___

### UNSAFE\_componentWillUpdate

▸ `Optional` **UNSAFE_componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

This method will not stop working in React 17.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`Deprecated`**

16.3, use getSnapshotBeforeUpdate instead

**`See`**

 - https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
 - https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`Props`\> |
| `nextState` | `Readonly`<`State`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

Component.UNSAFE\_componentWillUpdate

#### Defined in

node_modules/@types/react/index.d.ts:777

___

### activeCreate

▸ **activeCreate**(): `void`

#### Returns

`void`

#### Defined in

[src/UI/ProjectManagement/LanguageManagement.tsx:214](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/ProjectManagement/LanguageManagement.tsx#L214)

___

### activeDelete

▸ **activeDelete**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/UI/ProjectManagement/LanguageManagement.tsx:205](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/ProjectManagement/LanguageManagement.tsx#L205)

___

### activeUpdate

▸ **activeUpdate**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/UI/ProjectManagement/LanguageManagement.tsx:164](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/ProjectManagement/LanguageManagement.tsx#L164)

___

### clearForm

▸ **clearForm**(): `void`

#### Returns

`void`

#### Defined in

[src/UI/ProjectManagement/LanguageManagement.tsx:235](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/ProjectManagement/LanguageManagement.tsx#L235)

___

### componentDidCatch

▸ `Optional` **componentDidCatch**(`error`, `errorInfo`): `void`

Catches exceptions generated in descendant components. Unhandled exceptions will cause
the entire component tree to unmount.

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | `Error` |
| `errorInfo` | `ErrorInfo` |

#### Returns

`void`

#### Inherited from

Component.componentDidCatch

#### Defined in

node_modules/@types/react/index.d.ts:646

___

### componentDidMount

▸ **componentDidMount**(): `void`

#### Returns

`void`

#### Overrides

Component.componentDidMount

#### Defined in

[src/UI/ProjectManagement/LanguageManagement.tsx:54](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/ProjectManagement/LanguageManagement.tsx#L54)

___

### componentDidUpdate

▸ `Optional` **componentDidUpdate**(`prevProps`, `prevState`, `snapshot?`): `void`

Called immediately after updating occurs. Not called for the initial render.

The snapshot is only present if getSnapshotBeforeUpdate is present and returns non-null.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | `Readonly`<`Props`\> |
| `prevState` | `Readonly`<`State`\> |
| `snapshot?` | `any` |

#### Returns

`void`

#### Inherited from

Component.componentDidUpdate

#### Defined in

node_modules/@types/react/index.d.ts:688

___

### componentWillMount

▸ `Optional` **componentWillMount**(): `void`

Called immediately before mounting occurs, and before `Component#render`.
Avoid introducing any side-effects or subscriptions in this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`Deprecated`**

16.3, use componentDidMount or the constructor instead; will stop working in React 17

**`See`**

 - https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#initializing-state
 - https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Returns

`void`

#### Inherited from

Component.componentWillMount

#### Defined in

node_modules/@types/react/index.d.ts:703

___

### componentWillReceiveProps

▸ `Optional` **componentWillReceiveProps**(`nextProps`, `nextContext`): `void`

Called when the component may be receiving new props.
React may call this even if props have not changed, so be sure to compare new and existing
props if you only want to handle changes.

Calling `Component#setState` generally does not trigger this method.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`Deprecated`**

16.3, use static getDerivedStateFromProps instead; will stop working in React 17

**`See`**

 - https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#updating-state-based-on-props
 - https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`Props`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

Component.componentWillReceiveProps

#### Defined in

node_modules/@types/react/index.d.ts:732

___

### componentWillUnmount

▸ `Optional` **componentWillUnmount**(): `void`

Called immediately before a component is destroyed. Perform any necessary cleanup in this method, such as
cancelled network requests, or cleaning up any DOM elements created in `componentDidMount`.

#### Returns

`void`

#### Inherited from

Component.componentWillUnmount

#### Defined in

node_modules/@types/react/index.d.ts:641

___

### componentWillUpdate

▸ `Optional` **componentWillUpdate**(`nextProps`, `nextState`, `nextContext`): `void`

Called immediately before rendering when new props or state is received. Not called for the initial render.

Note: You cannot call `Component#setState` here.

Note: the presence of getSnapshotBeforeUpdate or getDerivedStateFromProps
prevents this from being invoked.

**`Deprecated`**

16.3, use getSnapshotBeforeUpdate instead; will stop working in React 17

**`See`**

 - https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#reading-dom-properties-before-an-update
 - https://reactjs.org/blog/2018/03/27/update-on-async-rendering.html#gradual-migration-path

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`Props`\> |
| `nextState` | `Readonly`<`State`\> |
| `nextContext` | `any` |

#### Returns

`void`

#### Inherited from

Component.componentWillUpdate

#### Defined in

node_modules/@types/react/index.d.ts:762

___

### createLanguage

▸ **createLanguage**(): `void`

#### Returns

`void`

#### Defined in

[src/UI/ProjectManagement/LanguageManagement.tsx:111](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/ProjectManagement/LanguageManagement.tsx#L111)

___

### deleteLanguage

▸ **deleteLanguage**(): `void`

#### Returns

`void`

#### Defined in

[src/UI/ProjectManagement/LanguageManagement.tsx:221](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/ProjectManagement/LanguageManagement.tsx#L221)

___

### forceUpdate

▸ **forceUpdate**(`callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

Component.forceUpdate

#### Defined in

node_modules/@types/react/index.d.ts:496

___

### getSnapshotBeforeUpdate

▸ `Optional` **getSnapshotBeforeUpdate**(`prevProps`, `prevState`): `any`

Runs before React applies the result of `render` to the document, and
returns an object to be given to componentDidUpdate. Useful for saving
things such as scroll position before `render` causes changes to it.

Note: the presence of getSnapshotBeforeUpdate prevents any of the deprecated
lifecycle events from running.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prevProps` | `Readonly`<`Props`\> |
| `prevState` | `Readonly`<`State`\> |

#### Returns

`any`

#### Inherited from

Component.getSnapshotBeforeUpdate

#### Defined in

node_modules/@types/react/index.d.ts:682

___

### projectService\_addListener

▸ **projectService_addListener**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/ProjectManagement/LanguageManagement.tsx:61](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/ProjectManagement/LanguageManagement.tsx#L61)

___

### refreshLanguages

▸ **refreshLanguages**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/UI/ProjectManagement/LanguageManagement.tsx:262](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/ProjectManagement/LanguageManagement.tsx#L262)

___

### render

▸ **render**(): `Element`

#### Returns

`Element`

#### Overrides

Component.render

#### Defined in

[src/UI/ProjectManagement/LanguageManagement.tsx:354](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/ProjectManagement/LanguageManagement.tsx#L354)

___

### setState

▸ **setState**<`K`\>(`state`, `callback?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `State` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `State` \| (`prevState`: `Readonly`<`State`\>, `props`: `Readonly`<`Props`\>) => `State` \| `Pick`<`State`, `K`\> \| `Pick`<`State`, `K`\> |
| `callback?` | () => `void` |

#### Returns

`void`

#### Inherited from

Component.setState

#### Defined in

node_modules/@types/react/index.d.ts:491

___

### shouldComponentUpdate

▸ `Optional` **shouldComponentUpdate**(`nextProps`, `nextState`, `nextContext`): `boolean`

Called to determine whether the change in props and state should trigger a re-render.

`Component` always returns true.
`PureComponent` implements a shallow comparison on props and state and returns true if any
props or states have changed.

If false is returned, `Component#render`, `componentWillUpdate`
and `componentDidUpdate` will not be called.

#### Parameters

| Name | Type |
| :------ | :------ |
| `nextProps` | `Readonly`<`Props`\> |
| `nextState` | `Readonly`<`State`\> |
| `nextContext` | `any` |

#### Returns

`boolean`

#### Inherited from

Component.shouldComponentUpdate

#### Defined in

node_modules/@types/react/index.d.ts:636

___

### updateAbstractSyntax

▸ **updateAbstractSyntax**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/ProjectManagement/LanguageManagement.tsx:290](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/ProjectManagement/LanguageManagement.tsx#L290)

___

### updateConcreteSyntax

▸ **updateConcreteSyntax**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/ProjectManagement/LanguageManagement.tsx:306](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/ProjectManagement/LanguageManagement.tsx#L306)

___

### updateLanguage

▸ **updateLanguage**(): `void`

#### Returns

`void`

#### Defined in

[src/UI/ProjectManagement/LanguageManagement.tsx:137](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/ProjectManagement/LanguageManagement.tsx#L137)

___

### updateLanguageListSelected

▸ **updateLanguageListSelected**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/ProjectManagement/LanguageManagement.tsx:268](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/ProjectManagement/LanguageManagement.tsx#L268)

___

### updateName

▸ **updateName**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/ProjectManagement/LanguageManagement.tsx:275](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/ProjectManagement/LanguageManagement.tsx#L275)

___

### updateStateAccept

▸ **updateStateAccept**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/ProjectManagement/LanguageManagement.tsx:338](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/ProjectManagement/LanguageManagement.tsx#L338)

___

### updateType

▸ **updateType**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/ProjectManagement/LanguageManagement.tsx:322](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/ProjectManagement/LanguageManagement.tsx#L322)

___

### validateLanguageExist

▸ **validateLanguageExist**(`func?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func?` | `string` |

#### Returns

`boolean`

#### Defined in

[src/UI/ProjectManagement/LanguageManagement.tsx:73](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/ProjectManagement/LanguageManagement.tsx#L73)

___

### validateParamsNull

▸ **validateParamsNull**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/UI/ProjectManagement/LanguageManagement.tsx:89](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/ProjectManagement/LanguageManagement.tsx#L89)

___

### validateSchemaAbstractSyntax

▸ **validateSchemaAbstractSyntax**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/UI/ProjectManagement/LanguageManagement.tsx:69](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/ProjectManagement/LanguageManagement.tsx#L69)

___

### validateSchemaConcreteSyntax

▸ **validateSchemaConcreteSyntax**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/UI/ProjectManagement/LanguageManagement.tsx:65](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/ProjectManagement/LanguageManagement.tsx#L65)
