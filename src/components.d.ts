/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  IMessageItem,
} from './components/types/IMessageItem';

export namespace Components {
  interface PwcChat {
    'cancelButtonName': string;
    'createdLabelNameProducer': (createdDate: string) => string;
    'deleteButtonName': string;
    'editButtonName': string;
    'editedLabelNameProducer': (editedDate: string) => string;
    'fullMessage': string;
    'inputValue': any;
    'listContainerId': string;
    'messageList': IMessageItem[];
    'saveButtonName': string;
    'submitButtonName': string;
    'submitButtonPlaceholder': string;
  }
  interface PwcChatItem {
    'cancelButtonName': string;
    'createdLabelNameProducer': (createdDate: string) => string;
    'deletable': boolean;
    'deleteButtonName': string;
    'editButtonName': string;
    'editTime'?: string;
    'editable': boolean;
    'editedLabelNameProducer': (editedDate: string) => string;
    'id': string;
    'message': string;
    'saveButtonName': string;
    'time': string;
    'username': string;
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
    'cancelButtonName'?: string;
    'createdLabelNameProducer'?: (createdDate: string) => string;
    'deleteButtonName'?: string;
    'editButtonName'?: string;
    'editedLabelNameProducer'?: (editedDate: string) => string;
    'fullMessage'?: string;
    'inputValue'?: any;
    'listContainerId'?: string;
    'messageList'?: IMessageItem[];
    /**
    * onChange method for text input
    */
    'onChangeMessage'?: (event: CustomEvent<any>) => void;
    /**
    * onSubmit method for text input
    */
    'onSubmitMessage'?: (event: CustomEvent<any>) => void;
    'saveButtonName'?: string;
    'submitButtonName'?: string;
    'submitButtonPlaceholder'?: string;
  }
  interface PwcChatItem {
    'cancelButtonName'?: string;
    'createdLabelNameProducer'?: (createdDate: string) => string;
    'deletable'?: boolean;
    'deleteButtonName'?: string;
    'editButtonName'?: string;
    'editTime'?: string;
    'editable'?: boolean;
    'editedLabelNameProducer'?: (editedDate: string) => string;
    'id'?: string;
    'message'?: string;
    'onMessageDeleted'?: (event: CustomEvent<{ id: string }>) => void;
    'onMessageEdited'?: (event: CustomEvent<{ id: string, newMessage: string }>) => void;
    'saveButtonName'?: string;
    'time'?: string;
    'username'?: string;
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


