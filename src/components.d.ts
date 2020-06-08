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
    'inputValue': any;
    'listContainerId': string;
    'messageList': any;
    'submitButtonName': string;
    'submitButtonPlaceholder': string;
  }
  interface PwcChatItem {
    'message': any;
    'time': any;
    'username': any;
  }
}

declare global {


  interface HTMLPwcChatElement extends Components.PwcChat, HTMLStencilElement {}
  var HTMLPwcChatElement: {
    prototype: HTMLPwcChatElement;
    new (): HTMLPwcChatElement;
  };

  interface HTMLPwcChatItemElement extends Components.PwcChatItem, HTMLStencilElement {}
  var HTMLPwcChatItemElement: {
    prototype: HTMLPwcChatItemElement;
    new (): HTMLPwcChatItemElement;
  };
  interface HTMLElementTagNameMap {
    'pwc-chat': HTMLPwcChatElement;
    'pwc-chat-item': HTMLPwcChatItemElement;
  }
}

declare namespace LocalJSX {
  interface PwcChat {
    'fullMessage'?: string;
    'inputValue'?: any;
    'listContainerId'?: string;
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
  interface PwcChatItem {
    'message'?: any;
    'time'?: any;
    'username'?: any;
  }

  interface IntrinsicElements {
    'pwc-chat': PwcChat;
    'pwc-chat-item': PwcChatItem;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'pwc-chat': LocalJSX.PwcChat & JSXBase.HTMLAttributes<HTMLPwcChatElement>;
      'pwc-chat-item': LocalJSX.PwcChatItem & JSXBase.HTMLAttributes<HTMLPwcChatItemElement>;
    }
  }
}


