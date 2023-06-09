# Class: default

[UI/MxProperties/CustomProperties](../wiki/UI.MxProperties.CustomProperties).default

## Hierarchy

- `Component`<`Props`, `State`\>

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](../wiki/UI.MxProperties.CustomProperties.default#constructor)

### Properties

- [containerRef](../wiki/UI.MxProperties.CustomProperties.default#containerref)
- [context](../wiki/UI.MxProperties.CustomProperties.default#context)
- [currentModel](../wiki/UI.MxProperties.CustomProperties.default#currentmodel)
- [currentObject](../wiki/UI.MxProperties.CustomProperties.default#currentobject)
- [elementDefinition](../wiki/UI.MxProperties.CustomProperties.default#elementdefinition)
- [props](../wiki/UI.MxProperties.CustomProperties.default#props)
- [refs](../wiki/UI.MxProperties.CustomProperties.default#refs)
- [state](../wiki/UI.MxProperties.CustomProperties.default#state)
- [contextType](../wiki/UI.MxProperties.CustomProperties.default#contexttype)

### Methods

- [UNSAFE\_componentWillMount](../wiki/UI.MxProperties.CustomProperties.default#unsafe_componentwillmount)
- [UNSAFE\_componentWillReceiveProps](../wiki/UI.MxProperties.CustomProperties.default#unsafe_componentwillreceiveprops)
- [UNSAFE\_componentWillUpdate](../wiki/UI.MxProperties.CustomProperties.default#unsafe_componentwillupdate)
- [activeCreate](../wiki/UI.MxProperties.CustomProperties.default#activecreate)
- [activeDelete](../wiki/UI.MxProperties.CustomProperties.default#activedelete)
- [activeUpdate](../wiki/UI.MxProperties.CustomProperties.default#activeupdate)
- [clearForm](../wiki/UI.MxProperties.CustomProperties.default#clearform)
- [componentDidCatch](../wiki/UI.MxProperties.CustomProperties.default#componentdidcatch)
- [componentDidMount](../wiki/UI.MxProperties.CustomProperties.default#componentdidmount)
- [componentDidUpdate](../wiki/UI.MxProperties.CustomProperties.default#componentdidupdate)
- [componentWillMount](../wiki/UI.MxProperties.CustomProperties.default#componentwillmount)
- [componentWillReceiveProps](../wiki/UI.MxProperties.CustomProperties.default#componentwillreceiveprops)
- [componentWillUnmount](../wiki/UI.MxProperties.CustomProperties.default#componentwillunmount)
- [componentWillUpdate](../wiki/UI.MxProperties.CustomProperties.default#componentwillupdate)
- [createProperty](../wiki/UI.MxProperties.CustomProperties.default#createproperty)
- [deleteProperty](../wiki/UI.MxProperties.CustomProperties.default#deleteproperty)
- [forceUpdate](../wiki/UI.MxProperties.CustomProperties.default#forceupdate)
- [getSnapshotBeforeUpdate](../wiki/UI.MxProperties.CustomProperties.default#getsnapshotbeforeupdate)
- [nullValidate](../wiki/UI.MxProperties.CustomProperties.default#nullvalidate)
- [projectService\_addSelectedElementListener](../wiki/UI.MxProperties.CustomProperties.default#projectservice_addselectedelementlistener)
- [render](../wiki/UI.MxProperties.CustomProperties.default#render)
- [selectNameChange](../wiki/UI.MxProperties.CustomProperties.default#selectnamechange)
- [selectOptionListChange](../wiki/UI.MxProperties.CustomProperties.default#selectoptionlistchange)
- [selectTypeChange](../wiki/UI.MxProperties.CustomProperties.default#selecttypechange)
- [setState](../wiki/UI.MxProperties.CustomProperties.default#setstate)
- [shouldComponentUpdate](../wiki/UI.MxProperties.CustomProperties.default#shouldcomponentupdate)
- [updateProperty](../wiki/UI.MxProperties.CustomProperties.default#updateproperty)
- [validatePropertyExist](../wiki/UI.MxProperties.CustomProperties.default#validatepropertyexist)

## Constructors

### constructor

• **new default**(`props`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `props` | `Props` |

#### Overrides

Component&lt;Props, State\&gt;.constructor

#### Defined in

[src/UI/MxProperties/CustomProperties.tsx:27](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/CustomProperties.tsx#L27)

## Properties

### containerRef

• **containerRef**: `any`

#### Defined in

[src/UI/MxProperties/CustomProperties.tsx:22](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/CustomProperties.tsx#L22)

___

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

### currentModel

• `Optional` **currentModel**: [`Model`](../wiki/Domain.ProductLineEngineering.Entities.Model.Model)

#### Defined in

[src/UI/MxProperties/CustomProperties.tsx:23](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/CustomProperties.tsx#L23)

___

### currentObject

• `Optional` **currentObject**: `any`

#### Defined in

[src/UI/MxProperties/CustomProperties.tsx:24](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/CustomProperties.tsx#L24)

___

### elementDefinition

• `Optional` **elementDefinition**: `any`

#### Defined in

[src/UI/MxProperties/CustomProperties.tsx:25](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/CustomProperties.tsx#L25)

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

• **state**: `Readonly`<`State`\>

#### Inherited from

Component.state

#### Defined in

node_modules/@types/react/index.d.ts:505

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

[src/UI/MxProperties/CustomProperties.tsx:181](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/CustomProperties.tsx#L181)

___

### activeDelete

▸ **activeDelete**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/UI/MxProperties/CustomProperties.tsx:172](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/CustomProperties.tsx#L172)

___

### activeUpdate

▸ **activeUpdate**(): `void`

#### Returns

`void`

#### Defined in

[src/UI/MxProperties/CustomProperties.tsx:170](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/CustomProperties.tsx#L170)

___

### clearForm

▸ **clearForm**(): `void`

#### Returns

`void`

#### Defined in

[src/UI/MxProperties/CustomProperties.tsx:188](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/CustomProperties.tsx#L188)

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

[src/UI/MxProperties/CustomProperties.tsx:56](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/CustomProperties.tsx#L56)

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

### createProperty

▸ **createProperty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/UI/MxProperties/CustomProperties.tsx:135](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/CustomProperties.tsx#L135)

___

### deleteProperty

▸ **deleteProperty**(): `void`

#### Returns

`void`

#### Defined in

[src/UI/MxProperties/CustomProperties.tsx:168](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/CustomProperties.tsx#L168)

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

### nullValidate

▸ **nullValidate**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/UI/MxProperties/CustomProperties.tsx:97](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/CustomProperties.tsx#L97)

___

### projectService\_addSelectedElementListener

▸ **projectService_addSelectedElementListener**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/MxProperties/CustomProperties.tsx:63](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/CustomProperties.tsx#L63)

___

### render

▸ **render**(): `Element`

#### Returns

`Element`

#### Overrides

Component.render

#### Defined in

[src/UI/MxProperties/CustomProperties.tsx:208](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/CustomProperties.tsx#L208)

___

### selectNameChange

▸ **selectNameChange**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/MxProperties/CustomProperties.tsx:83](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/CustomProperties.tsx#L83)

___

### selectOptionListChange

▸ **selectOptionListChange**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/MxProperties/CustomProperties.tsx:91](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/CustomProperties.tsx#L91)

___

### selectTypeChange

▸ **selectTypeChange**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/MxProperties/CustomProperties.tsx:69](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/CustomProperties.tsx#L69)

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

### updateProperty

▸ **updateProperty**(): `void`

#### Returns

`void`

#### Defined in

[src/UI/MxProperties/CustomProperties.tsx:166](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/CustomProperties.tsx#L166)

___

### validatePropertyExist

▸ **validatePropertyExist**(`func?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `func?` | `string` |

#### Returns

`boolean`

#### Defined in

[src/UI/MxProperties/CustomProperties.tsx:116](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/CustomProperties.tsx#L116)
