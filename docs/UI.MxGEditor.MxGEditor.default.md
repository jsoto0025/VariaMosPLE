# Class: default

[UI/MxGEditor/MxGEditor](../wiki/UI.MxGEditor.MxGEditor).default

## Hierarchy

- `Component`<`Props`, `State`\>

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](../wiki/UI.MxGEditor.MxGEditor.default#constructor)

### Properties

- [containerRef](../wiki/UI.MxGEditor.MxGEditor.default#containerref)
- [context](../wiki/UI.MxGEditor.MxGEditor.default#context)
- [currentModel](../wiki/UI.MxGEditor.MxGEditor.default#currentmodel)
- [graph](../wiki/UI.MxGEditor.MxGEditor.default#graph)
- [graphContainerRef](../wiki/UI.MxGEditor.MxGEditor.default#graphcontainerref)
- [props](../wiki/UI.MxGEditor.MxGEditor.default#props)
- [refs](../wiki/UI.MxGEditor.MxGEditor.default#refs)
- [state](../wiki/UI.MxGEditor.MxGEditor.default#state)
- [contextType](../wiki/UI.MxGEditor.MxGEditor.default#contexttype)

### Methods

- [LoadGraph](../wiki/UI.MxGEditor.MxGEditor.default#loadgraph)
- [UNSAFE\_componentWillMount](../wiki/UI.MxGEditor.MxGEditor.default#unsafe_componentwillmount)
- [UNSAFE\_componentWillReceiveProps](../wiki/UI.MxGEditor.MxGEditor.default#unsafe_componentwillreceiveprops)
- [UNSAFE\_componentWillUpdate](../wiki/UI.MxGEditor.MxGEditor.default#unsafe_componentwillupdate)
- [componentDidCatch](../wiki/UI.MxGEditor.MxGEditor.default#componentdidcatch)
- [componentDidMount](../wiki/UI.MxGEditor.MxGEditor.default#componentdidmount)
- [componentDidUpdate](../wiki/UI.MxGEditor.MxGEditor.default#componentdidupdate)
- [componentWillMount](../wiki/UI.MxGEditor.MxGEditor.default#componentwillmount)
- [componentWillReceiveProps](../wiki/UI.MxGEditor.MxGEditor.default#componentwillreceiveprops)
- [componentWillUnmount](../wiki/UI.MxGEditor.MxGEditor.default#componentwillunmount)
- [componentWillUpdate](../wiki/UI.MxGEditor.MxGEditor.default#componentwillupdate)
- [deleteSelection](../wiki/UI.MxGEditor.MxGEditor.default#deleteselection)
- [forceUpdate](../wiki/UI.MxGEditor.MxGEditor.default#forceupdate)
- [getSnapshotBeforeUpdate](../wiki/UI.MxGEditor.MxGEditor.default#getsnapshotbeforeupdate)
- [loadModel](../wiki/UI.MxGEditor.MxGEditor.default#loadmodel)
- [projectService\_addNewProductLineListener](../wiki/UI.MxGEditor.MxGEditor.default#projectservice_addnewproductlinelistener)
- [projectService\_addSelectedModelListener](../wiki/UI.MxGEditor.MxGEditor.default#projectservice_addselectedmodellistener)
- [projectService\_addUpdatedElementListener](../wiki/UI.MxGEditor.MxGEditor.default#projectservice_addupdatedelementlistener)
- [pushIfNotExist](../wiki/UI.MxGEditor.MxGEditor.default#pushifnotexist)
- [refreshEdgeLabel](../wiki/UI.MxGEditor.MxGEditor.default#refreshedgelabel)
- [refreshEdgeStyle](../wiki/UI.MxGEditor.MxGEditor.default#refreshedgestyle)
- [refreshVertexLabel](../wiki/UI.MxGEditor.MxGEditor.default#refreshvertexlabel)
- [render](../wiki/UI.MxGEditor.MxGEditor.default#render)
- [setState](../wiki/UI.MxGEditor.MxGEditor.default#setstate)
- [shouldComponentUpdate](../wiki/UI.MxGEditor.MxGEditor.default#shouldcomponentupdate)

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

[src/UI/MxGEditor/MxGEditor.tsx:26](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxGEditor/MxGEditor.tsx#L26)

## Properties

### containerRef

• **containerRef**: `any`

#### Defined in

[src/UI/MxGEditor/MxGEditor.tsx:21](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxGEditor/MxGEditor.tsx#L21)

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

[src/UI/MxGEditor/MxGEditor.tsx:24](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxGEditor/MxGEditor.tsx#L24)

___

### graph

• `Optional` **graph**: `mxGraph`

#### Defined in

[src/UI/MxGEditor/MxGEditor.tsx:23](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxGEditor/MxGEditor.tsx#L23)

___

### graphContainerRef

• **graphContainerRef**: `any`

#### Defined in

[src/UI/MxGEditor/MxGEditor.tsx:22](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxGEditor/MxGEditor.tsx#L22)

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

• **state**: `Object` = `{}`

#### Overrides

Component.state

#### Defined in

[src/UI/MxGEditor/MxGEditor.tsx:20](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxGEditor/MxGEditor.tsx#L20)

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

### LoadGraph

▸ **LoadGraph**(`graph`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `graph` | `mxGraph` |

#### Returns

`void`

#### Defined in

[src/UI/MxGEditor/MxGEditor.tsx:78](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxGEditor/MxGEditor.tsx#L78)

___

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

[src/UI/MxGEditor/MxGEditor.tsx:62](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxGEditor/MxGEditor.tsx#L62)

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

### deleteSelection

▸ **deleteSelection**(): `void`

#### Returns

`void`

#### Defined in

[src/UI/MxGEditor/MxGEditor.tsx:315](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxGEditor/MxGEditor.tsx#L315)

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

### loadModel

▸ **loadModel**(`model`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `model` | [`Model`](../wiki/Domain.ProductLineEngineering.Entities.Model.Model) |

#### Returns

`void`

#### Defined in

[src/UI/MxGEditor/MxGEditor.tsx:436](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxGEditor/MxGEditor.tsx#L436)

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

[src/UI/MxGEditor/MxGEditor.tsx:38](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxGEditor/MxGEditor.tsx#L38)

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

[src/UI/MxGEditor/MxGEditor.tsx:42](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxGEditor/MxGEditor.tsx#L42)

___

### projectService\_addUpdatedElementListener

▸ **projectService_addUpdatedElementListener**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/MxGEditor/MxGEditor.tsx:48](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxGEditor/MxGEditor.tsx#L48)

___

### pushIfNotExist

▸ **pushIfNotExist**(`array`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `any` |
| `value` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/MxGEditor/MxGEditor.tsx:426](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxGEditor/MxGEditor.tsx#L426)

___

### refreshEdgeLabel

▸ **refreshEdgeLabel**(`edge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/MxGEditor/MxGEditor.tsx:368](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxGEditor/MxGEditor.tsx#L368)

___

### refreshEdgeStyle

▸ **refreshEdgeStyle**(`edge`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `edge` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/MxGEditor/MxGEditor.tsx:338](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxGEditor/MxGEditor.tsx#L338)

___

### refreshVertexLabel

▸ **refreshVertexLabel**(`vertice`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vertice` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/MxGEditor/MxGEditor.tsx:397](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxGEditor/MxGEditor.tsx#L397)

___

### render

▸ **render**(): `Element`

#### Returns

`Element`

#### Overrides

Component.render

#### Defined in

[src/UI/MxGEditor/MxGEditor.tsx:539](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/MxGEditor/MxGEditor.tsx#L539)

___

### setState

▸ **setState**<`K`\>(`state`, `callback?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `never` |

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
