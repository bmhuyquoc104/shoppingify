import styled from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    header: {
      backgroundColor: string;
      button: {
        backgroundColor: string;
      };
    };
    button: {
      backgroundColor: string;
    };
    heading1: {
      color: string;
    };
    text: {
      color: string;
    };
    body: {
      backgroundColor: string;
    };
    plus: {
      color: string;
    };
    placeholder: {
      color: string;
    };
    item: {
      backgroundColor: string;
    };
    skeleton:{
      backgroundColor: string;
      wrapper:{
        backgroundColor: string;
      }
    },
    shoppingList: {
      backgroundColor: string;
      category: {
        color: string;
      };
      completeButton: {
        backgroundColor: string;
      };
      footer: {
        boxShadow: string;
      };
      list: {
        backgroundColor: string;
      };
    };
  }
}
