/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface PwcChat {
    'fullMessage': string;
    'messageList': any;
    'submitButtonName': string;
    'submitButtonPlaceholder': string;
  }
}

declare global {


  interface HTMLPwcChatElement extends Components.PwcChat, HTMLStencilElement {}
  var HTMLPwcChatElement: {
    prototype: HTMLPwcChatElement;
    new (): HTMLPwcChatElement;
  };
  interface HTMLElementTagNameMap {
    'pwc-chat': HTMLPwcChatElement;
  }
}

declare namespace LocalJSX {
  interface PwcChat {
    'fullMessage'?: string;
    'messageList'?: any;
    /**
    * onChange method for text input
    */
    'onChangeMessage'?: (event: CustomEvent<any>) => void;
    /**
    * onSubmit method for text input
    */
    'onSubmitMessage'?: (event: CustomEvent<any>) => void;
    'submitButtonName'?: string;
    'submitButtonPlaceholder'?: string;
  }

  interface IntrinsicElements {
    'pwc-chat': PwcChat;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'pwc-chat': LocalJSX.PwcChat & JSXBase.HTMLAttributes<HTMLPwcChatElement>;
    }
  }
}


