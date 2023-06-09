# Class: default

[UI/TreeExplorer/TreeExplorer](../wiki/UI.TreeExplorer.TreeExplorer).default

## Hierarchy

- `Component`<`Props`, `State`\>

  ↳ **`default`**

## Table of contents

### Constructors

- [constructor](../wiki/UI.TreeExplorer.TreeExplorer.default#constructor)

### Properties

- [context](../wiki/UI.TreeExplorer.TreeExplorer.default#context)
- [props](../wiki/UI.TreeExplorer.TreeExplorer.default#props)
- [refs](../wiki/UI.TreeExplorer.TreeExplorer.default#refs)
- [state](../wiki/UI.TreeExplorer.TreeExplorer.default#state)
- [contextType](../wiki/UI.TreeExplorer.TreeExplorer.default#contexttype)

### Methods

- [UNSAFE\_componentWillMount](../wiki/UI.TreeExplorer.TreeExplorer.default#unsafe_componentwillmount)
- [UNSAFE\_componentWillReceiveProps](../wiki/UI.TreeExplorer.TreeExplorer.default#unsafe_componentwillreceiveprops)
- [UNSAFE\_componentWillUpdate](../wiki/UI.TreeExplorer.TreeExplorer.default#unsafe_componentwillupdate)
- [btnSave\_onClick](../wiki/UI.TreeExplorer.TreeExplorer.default#btnsave_onclick)
- [btn\_viewAdaptationModel](../wiki/UI.TreeExplorer.TreeExplorer.default#btn_viewadaptationmodel)
- [btn\_viewApplicationEngModel](../wiki/UI.TreeExplorer.TreeExplorer.default#btn_viewapplicationengmodel)
- [btn\_viewApplicationModel](../wiki/UI.TreeExplorer.TreeExplorer.default#btn_viewapplicationmodel)
- [btn\_viewDomainModel](../wiki/UI.TreeExplorer.TreeExplorer.default#btn_viewdomainmodel)
- [componentDidCatch](../wiki/UI.TreeExplorer.TreeExplorer.default#componentdidcatch)
- [componentDidMount](../wiki/UI.TreeExplorer.TreeExplorer.default#componentdidmount)
- [componentDidUpdate](../wiki/UI.TreeExplorer.TreeExplorer.default#componentdidupdate)
- [componentWillMount](../wiki/UI.TreeExplorer.TreeExplorer.default#componentwillmount)
- [componentWillReceiveProps](../wiki/UI.TreeExplorer.TreeExplorer.default#componentwillreceiveprops)
- [componentWillUnmount](../wiki/UI.TreeExplorer.TreeExplorer.default#componentwillunmount)
- [componentWillUpdate](../wiki/UI.TreeExplorer.TreeExplorer.default#componentwillupdate)
- [forceUpdate](../wiki/UI.TreeExplorer.TreeExplorer.default#forceupdate)
- [getSnapshotBeforeUpdate](../wiki/UI.TreeExplorer.TreeExplorer.default#getsnapshotbeforeupdate)
- [lps\_onClick](../wiki/UI.TreeExplorer.TreeExplorer.default#lps_onclick)
- [projectService\_addListener](../wiki/UI.TreeExplorer.TreeExplorer.default#projectservice_addlistener)
- [render](../wiki/UI.TreeExplorer.TreeExplorer.default#render)
- [setState](../wiki/UI.TreeExplorer.TreeExplorer.default#setstate)
- [shouldComponentUpdate](../wiki/UI.TreeExplorer.TreeExplorer.default#shouldcomponentupdate)
- [updateAdaptationSelected](../wiki/UI.TreeExplorer.TreeExplorer.default#updateadaptationselected)
- [updateApplicationSelected](../wiki/UI.TreeExplorer.TreeExplorer.default#updateapplicationselected)
- [updateLpSelected](../wiki/UI.TreeExplorer.TreeExplorer.default#updatelpselected)

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

[src/UI/TreeExplorer/TreeExplorer.tsx:15](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/TreeExplorer/TreeExplorer.tsx#L15)

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

• **state**: `Object` = `{}`

#### Overrides

Component.state

#### Defined in

[src/UI/TreeExplorer/TreeExplorer.tsx:13](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/TreeExplorer/TreeExplorer.tsx#L13)

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

### btnSave\_onClick

▸ **btnSave_onClick**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Defined in

[src/UI/TreeExplorer/TreeExplorer.tsx:146](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/TreeExplorer/TreeExplorer.tsx#L146)

___

### btn\_viewAdaptationModel

▸ **btn_viewAdaptationModel**(`idPl`, `idApplication`, `idAdaptation`, `idAdaptationModel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `idPl` | `number` |
| `idApplication` | `number` |
| `idAdaptation` | `number` |
| `idAdaptationModel` | `number` |

#### Returns

`void`

#### Defined in

[src/UI/TreeExplorer/TreeExplorer.tsx:51](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/TreeExplorer/TreeExplorer.tsx#L51)

___

### btn\_viewApplicationEngModel

▸ **btn_viewApplicationEngModel**(`idPl`, `idApplicationEngModel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `idPl` | `number` |
| `idApplicationEngModel` | `number` |

#### Returns

`void`

#### Defined in

[src/UI/TreeExplorer/TreeExplorer.tsx:66](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/TreeExplorer/TreeExplorer.tsx#L66)

___

### btn\_viewApplicationModel

▸ **btn_viewApplicationModel**(`idPl`, `idApplication`, `idApplicationModel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `idPl` | `number` |
| `idApplication` | `number` |
| `idApplicationModel` | `number` |

#### Returns

`void`

#### Defined in

[src/UI/TreeExplorer/TreeExplorer.tsx:38](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/TreeExplorer/TreeExplorer.tsx#L38)

___

### btn\_viewDomainModel

▸ **btn_viewDomainModel**(`idPl`, `idDomainModel`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `idPl` | `number` |
| `idDomainModel` | `number` |

#### Returns

`void`

#### Defined in

[src/UI/TreeExplorer/TreeExplorer.tsx:33](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/TreeExplorer/TreeExplorer.tsx#L33)

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

[src/UI/TreeExplorer/TreeExplorer.tsx:112](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/TreeExplorer/TreeExplorer.tsx#L112)

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

### lps\_onClick

▸ **lps_onClick**(`e`, `i`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |
| `i` | `number` |

#### Returns

`void`

#### Defined in

[src/UI/TreeExplorer/TreeExplorer.tsx:102](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/TreeExplorer/TreeExplorer.tsx#L102)

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

[src/UI/TreeExplorer/TreeExplorer.tsx:107](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/TreeExplorer/TreeExplorer.tsx#L107)

___

### render

▸ **render**(): `Element`

#### Returns

`Element`

#### Overrides

Component.render

#### Defined in

[src/UI/TreeExplorer/TreeExplorer.tsx:150](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/TreeExplorer/TreeExplorer.tsx#L150)

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

___

### updateAdaptationSelected

▸ **updateAdaptationSelected**(`idPl`, `idApplication`, `idAdaptation`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `idPl` | `number` |
| `idApplication` | `number` |
| `idAdaptation` | `number` |

#### Returns

`void`

#### Defined in

[src/UI/TreeExplorer/TreeExplorer.tsx:89](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/TreeExplorer/TreeExplorer.tsx#L89)

___

### updateApplicationSelected

▸ **updateApplicationSelected**(`idPl`, `idApplication`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `idPl` | `number` |
| `idApplication` | `number` |

#### Returns

`void`

#### Defined in

[src/UI/TreeExplorer/TreeExplorer.tsx:84](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/TreeExplorer/TreeExplorer.tsx#L84)

___

### updateLpSelected

▸ **updateLpSelected**(`e`, `idPl`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |
| `idPl` | `number` |

#### Returns

`void`

#### Defined in

[src/UI/TreeExplorer/TreeExplorer.tsx:74](https://github.com/94briel/VariaMosPLE/blob/0611efd/src/UI/TreeExplorer/TreeExplorer.tsx#L74)
