jquery.scrollToSide
===================

__Current version: v0.0.1__

Scrolls an element to a side of the viewport.

##How it works

It's one of the simplest plugins for scroll an element to a side.
This plugin supports even scroll animations for a smoother experience.
```js
// Just do this and it's done !
$("#element").scrollToSide("top");
```

##How to use

This plugin accepts 3 parameters:
```js
$("#element").scrollToSide(side, options, callback)
```

###`side`
The target side of the viewport, can be `"top"` or `"bottom"`

###`options`
The options object, can be ommited.
The structure and default options are as follow:

```js
{
  container: "body", // A selector of the viewport that scrolls
  offset: 0,         // Offset from side of the element in px
  animated: true,    // If it animates
  duration: "fast"   // The animation speed, can be "fast", "normal", "slow" or a number of milliseconds
}
```
###`callback`
An optionnal function to execute when the animation is finished

##License

This plugin is released under the [MIT License](https://github.com/DeathMiner/jQuery.scrollToSide/blob/master/LICENSE)
