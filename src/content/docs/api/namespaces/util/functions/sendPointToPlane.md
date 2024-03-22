---
editUrl: false
next: false
prev: false
title: "sendPointToPlane"
---

> **sendPointToPlane**(`point`, `from`?, `to`?): [`Point`](../../../classes/Point.md)

Sends a point from the source coordinate plane to the destination coordinate plane.\
From the canvas/viewer's perspective the point remains unchanged.

## Parameters

• **point**: [`Point`](../../../classes/Point.md)

• **from?**: [`TMat2D`](../../../type-aliases/TMat2D.md)= `iMatrix`

plane matrix containing object. Passing `undefined` is equivalent to passing the identity matrix, which means `point` exists in the canvas coordinate plane.

• **to?**: [`TMat2D`](../../../type-aliases/TMat2D.md)= `iMatrix`

destination plane matrix to contain object. Passing `undefined` means `point` should be sent to the canvas coordinate plane.

## Returns

[`Point`](../../../classes/Point.md)

transformed point

## Example

```ts
var obj = new Rect({ left: 20, top: 20, width: 60, height: 60, strokeWidth: 0 });
var group = new Group([obj], { strokeWidth: 0 });
var sentPoint1 = sendPointToPlane(new Point(50, 50), undefined, group.calcTransformMatrix());
var sentPoint2 = sendPointToPlane(new Point(50, 50), iMatrix, group.calcTransformMatrix());
console.log(sentPoint1, sentPoint2) //  both points print (0,0) which is the center of group
```

## Source

src/util/misc/planeChange.ts:36
