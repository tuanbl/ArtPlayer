import { errorHandle } from './index';

export default function verification(option) {
  errorHandle(
    option.container,
    '\'container\' option is required.'
  );

  errorHandle(
    option.url,
    '\'url\' option is required.'
  );

  errorHandle(
    option.container instanceof Element,
    `'container' option require 'Element' type, but got '${typeof option.container}'.`
  );

  errorHandle(
    typeof option.url === 'string',
    `'url' option require 'string' type, but got '${typeof option.url}'.`
  );

  errorHandle(
    typeof option.poster === 'string',
    `'poster' option require 'string' type, but got '${typeof option.poster}'.`
  );

  errorHandle(
    typeof option.volume === 'number',
    `'volume' option require 'number' type, but got '${typeof option.volume}'.`
  );

  errorHandle(
    typeof option.autoplay === 'boolean',
    `'autoplay' option require 'boolean' type, but got '${typeof option.autoplay}'.`
  );

  errorHandle(
    ['none', 'metadata', 'auto'].indexOf(option.preload) > -1,
    '\'preload\' option require one of \'none、metadata、auto\'.'
  );

  errorHandle(
    typeof option.lang === 'string',
    `'lang' option require 'string' type, but got '${typeof option.lang}'.`
  );

  errorHandle(
    typeof option.type === 'string',
    `'type' option require 'string' type, but got '${typeof option.type}'.`
  );

  errorHandle(
    typeof option.mimeCodec === 'string',
    `'mimeCodec' option require 'string' type, but got '${typeof option.mimeCodec}'.`
  );

  errorHandle(
    Array.isArray(option.layers),
    `'layers' option require 'array' type, but got '${typeof option.layers}'.`
  );

  errorHandle(
    Array.isArray(option.contextmenu),
    `'contextmenu' option require 'array' type, but got '${typeof option.contextmenu}'.`
  );

  errorHandle(
    typeof option.loading === 'string',
    `'loading' option require 'string' type, but got '${typeof option.loading}'.`
  );

  errorHandle(
    typeof option.theme === 'string',
    `'theme' option require 'string' type, but got '${typeof option.theme}'.`
  );

  errorHandle(
    typeof option.hotkey === 'boolean',
    `'hotkey' option require 'boolean' type, but got '${typeof option.hotkey}'.`
  );
}
