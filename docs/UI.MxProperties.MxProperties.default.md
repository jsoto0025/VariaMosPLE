# Class: default

[UI/MxProperties/MxProperties](../wiki/UI.MxProperties.MxProperties).default

## Hierarchy

- `Component`<`Props`, `State`\>

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](../wiki/UI.MxProperties.MxProperties.default#constructor)

### Properties

- [containerRef](../wiki/UI.MxProperties.MxProperties.default#containerref)
- [context](../wiki/UI.MxProperties.MxProperties.default#context)
- [currentModel](../wiki/UI.MxProperties.MxProperties.default#currentmodel)
- [currentObject](../wiki/UI.MxProperties.MxProperties.default#currentobject)
- [elementDefinition](../wiki/UI.MxProperties.MxProperties.default#elementdefinition)
- [props](../wiki/UI.MxProperties.MxProperties.default#props)
- [refs](../wiki/UI.MxProperties.MxProperties.default#refs)
- [state](../wiki/UI.MxProperties.MxProperties.default#state)
- [contextType](../wiki/UI.MxProperties.MxProperties.default#contexttype)

### Methods

- [UNSAFE\_componentWillMount](../wiki/UI.MxProperties.MxProperties.default#unsafe_componentwillmount)
- [UNSAFE\_componentWillReceiveProps](../wiki/UI.MxProperties.MxProperties.default#unsafe_componentwillreceiveprops)
- [UNSAFE\_componentWillUpdate](../wiki/UI.MxProperties.MxProperties.default#unsafe_componentwillupdate)
- [checkBox\_onChange](../wiki/UI.MxProperties.MxProperties.default#checkbox_onchange)
- [clearForm](../wiki/UI.MxProperties.MxProperties.default#clearform)
- [componentDidCatch](../wiki/UI.MxProperties.MxProperties.default#componentdidcatch)
- [componentDidMount](../wiki/UI.MxProperties.MxProperties.default#componentdidmount)
- [componentDidUpdate](../wiki/UI.MxProperties.MxProperties.default#componentdidupdate)
- [componentWillMount](../wiki/UI.MxProperties.MxProperties.default#componentwillmount)
- [componentWillReceiveProps](../wiki/UI.MxProperties.MxProperties.default#componentwillreceiveprops)
- [componentWillUnmount](../wiki/UI.MxProperties.MxProperties.default#componentwillunmount)
- [componentWillUpdate](../wiki/UI.MxProperties.MxProperties.default#componentwillupdate)
- [createControl](../wiki/UI.MxProperties.MxProperties.default#createcontrol)
- [createCustomProperty](../wiki/UI.MxProperties.MxProperties.default#createcustomproperty)
- [customPropertySelected](../wiki/UI.MxProperties.MxProperties.default#custompropertyselected)
- [deleteCustomProperty](../wiki/UI.MxProperties.MxProperties.default#deletecustomproperty)
- [forceUpdate](../wiki/UI.MxProperties.MxProperties.default#forceupdate)
- [getSnapshotBeforeUpdate](../wiki/UI.MxProperties.MxProperties.default#getsnapshotbeforeupdate)
- [input\_onChange](../wiki/UI.MxProperties.MxProperties.default#input_onchange)
- [newCustomPropertyForm](../wiki/UI.MxProperties.MxProperties.default#newcustompropertyform)
- [nullValidate](../wiki/UI.MxProperties.MxProperties.default#nullvalidate)
- [projectService\_addNewProductLineListener](../wiki/UI.MxProperties.MxProperties.default#projectservice_addnewproductlinelistener)
- [projectService\_addSelectedElementListener](../wiki/UI.MxProperties.MxProperties.default#projectservice_addselectedelementlistener)
- [projectService\_addSelectedModelListener](../wiki/UI.MxProperties.MxProperties.default#projectservice_addselectedmodellistener)
- [property\_onChange](../wiki/UI.MxProperties.MxProperties.default#property_onchange)
- [render](../wiki/UI.MxProperties.MxProperties.default#render)
- [renderProperties](../wiki/UI.MxProperties.MxProperties.default#renderproperties)
- [selectCommentChange](../wiki/UI.MxProperties.MxProperties.default#selectcommentchange)
- [selectDomainChange](../wiki/UI.MxProperties.MxProperties.default#selectdomainchange)
- [selectNameChange](../wiki/UI.MxProperties.MxProperties.default#selectnamechange)
- [selectPossibleValuesChange](../wiki/UI.MxProperties.MxProperties.default#selectpossiblevalueschange)
- [setState](../wiki/UI.MxProperties.MxProperties.default#setstate)
- [shouldComponentUpdate](../wiki/UI.MxProperties.MxProperties.default#shouldcomponentupdate)
- [showLinkedProperties](../wiki/UI.MxProperties.MxProperties.default#showlinkedproperties)
- [updateCustomProperty](../wiki/UI.MxProperties.MxProperties.default#updatecustomproperty)
- [updateCustomPropertyForm](../wiki/UI.MxProperties.MxProperties.default#updatecustompropertyform)
- [validatePropertyExist](../wiki/UI.MxProperties.MxProperties.default#validatepropertyexist)

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

[src/UI/MxProperties/MxProperties.tsx:36](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L36)

## Properties

### containerRef

• **containerRef**: `any`

#### Defined in

[src/UI/MxProperties/MxProperties.tsx:31](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L31)

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

[src/UI/MxProperties/MxProperties.tsx:32](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L32)

___

### currentObject

• `Optional` **currentObject**: `any`

#### Defined in

[src/UI/MxProperties/MxProperties.tsx:33](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L33)

___

### elementDefinition

• `Optional` **elementDefinition**: `any`

#### Defined in

[src/UI/MxProperties/MxProperties.tsx:34](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L34)

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

### checkBox\_onChange

▸ **checkBox_onChange**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/MxProperties/MxProperties.tsx:94](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L94)

___

### clearForm

▸ **clearForm**(): `void`

#### Returns

`void`

#### Defined in

[src/UI/MxProperties/MxProperties.tsx:296](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L296)

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

[src/UI/MxProperties/MxProperties.tsx:159](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L159)

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

### createControl

▸ **createControl**(`property`, `value`, `display`): `Element`

#### Parameters

| Name | Type |
| :------ | :------ |
| `property` | `any` |
| `value` | `any` |
| `display` | `any` |

#### Returns

`Element`

#### Defined in

[src/UI/MxProperties/MxProperties.tsx:435](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L435)

___

### createCustomProperty

▸ **createCustomProperty**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/UI/MxProperties/MxProperties.tsx:219](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L219)

___

### customPropertySelected

▸ **customPropertySelected**(`Property`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `Property` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/MxProperties/MxProperties.tsx:310](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L310)

___

### deleteCustomProperty

▸ **deleteCustomProperty**(): `void`

#### Returns

`void`

#### Defined in

[src/UI/MxProperties/MxProperties.tsx:280](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L280)

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

### input\_onChange

▸ **input_onChange**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/MxProperties/MxProperties.tsx:100](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L100)

___

### newCustomPropertyForm

▸ **newCustomPropertyForm**(): `void`

#### Returns

`void`

#### Defined in

[src/UI/MxProperties/MxProperties.tsx:172](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L172)

___

### nullValidate

▸ **nullValidate**(): `boolean`

#### Returns

`boolean`

#### Defined in

[src/UI/MxProperties/MxProperties.tsx:191](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L191)

___

### projectService\_addNewProductLineListener

▸ **projectService_addNewProductLineListener**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/MxProperties/MxProperties.tsx:78](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L78)

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

[src/UI/MxProperties/MxProperties.tsx:88](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L88)

___

### projectService\_addSelectedModelListener

▸ **projectService_addSelectedModelListener**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/MxProperties/MxProperties.tsx:82](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L82)

___

### property\_onChange

▸ **property_onChange**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/MxProperties/MxProperties.tsx:106](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L106)

___

### render

▸ **render**(): `Element`

#### Returns

`Element`

#### Overrides

Component.render

#### Defined in

[src/UI/MxProperties/MxProperties.tsx:659](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L659)

___

### renderProperties

▸ **renderProperties**(): `any`[]

#### Returns

`any`[]

#### Defined in

[src/UI/MxProperties/MxProperties.tsx:342](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L342)

___

### selectCommentChange

▸ **selectCommentChange**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/MxProperties/MxProperties.tsx:330](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L330)

___

### selectDomainChange

▸ **selectDomainChange**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/MxProperties/MxProperties.tsx:324](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L324)

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

[src/UI/MxProperties/MxProperties.tsx:316](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L316)

___

### selectPossibleValuesChange

▸ **selectPossibleValuesChange**(`event`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/MxProperties/MxProperties.tsx:336](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L336)

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

### showLinkedProperties

▸ **showLinkedProperties**(`propertyName`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `propertyName` | `any` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/MxProperties/MxProperties.tsx:141](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L141)

___

### updateCustomProperty

▸ **updateCustomProperty**(): `void`

#### Returns

`void`

#### Defined in

[src/UI/MxProperties/MxProperties.tsx:248](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L248)

___

### updateCustomPropertyForm

▸ **updateCustomPropertyForm**(): `void`

#### Returns

`void`

#### Defined in

[src/UI/MxProperties/MxProperties.tsx:179](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L179)

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

[src/UI/MxProperties/MxProperties.tsx:200](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxProperties/MxProperties.tsx#L200)
