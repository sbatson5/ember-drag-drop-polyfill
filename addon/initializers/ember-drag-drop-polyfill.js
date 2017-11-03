import config from 'ember-get-config';

export function initialize(/* application */) {

  let options = config["ember-drag-drop-polyfill"] || {};
  let isApple = ['iPhone', 'iPad', 'iPod'].includes(navigator.platform);

  if (typeof DragDropPolyfill !== 'undefined' && isApple) {
    DragDropPolyfill.Initialize(options);
  }
}

export default {
  name: 'ember-drag-drop-polyfill',
  initialize
};
