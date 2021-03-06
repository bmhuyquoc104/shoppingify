const lightTheme = {
  header: {
    backgroundColor: "var(--clr_header_bg_light)",
    button: {
      backgroundColor: "var(--clr_header_button_light)",
    },
  },
  button: {
    backgroundColor: "var(--clr_button_bg_light)",
    color: "var(--clr_button_text)",
  },
  heading1: {
    color: "var(--clr_heading1_text_light)",
  },
  text: {
    color: "var(--clr_text_light)",
  },
  body: {
    backgroundColor: "var(--clr_body_bg_light)",
  },
  plus: {
    color: "var(--clr_plus_color_light)",
  },
  placeholder: {
    color: "var(--clr_text_placeholder_color_light)",
  },
  item: {
    backgroundColor: "var(--clr_item_bg_light)",
  },
  skeleton:{
    backgroundColor: "var(--clr_skeleton_bg_light)",
    wrapper:{
      backgroundColor: "var(--clr_skeleton_wrapper_bg_light)"
    }
  },
  shoppingList: {
    backgroundColor: "var(--clr_shopping_list_bg_light)",
    category: {
      color: "var(--clr_shopping_list_category_light)",
    },
    completeButton: {
      backgroundColor: "var(--clr_complete_button_bg_light)",
    },
    footer: {
      boxShadow: "var(--clr_shopping_list_footer_bg_light)",
    },
    list: {
      backgroundColor: "var(--clr_shopping_list_options_bg_light)",
    },
  },
};

const darkTheme = {
  header: {
    backgroundColor: "var(--clr_header_bg_dark)",
    button: {
      backgroundColor: "var(--clr_header_button_dark)",
    },
  },
  button: {
    backgroundColor: "var(--clr_button_bg_dark)",
    color: "var(--clr_button_text)"
  },
  heading1: {
    color: "var(--clr_heading1_text_dark)",
  },
  text: {
    color: "var(--clr_text_dark)",
  },
  body: {
    backgroundColor: "var(--clr_body_bg_dark)",
  },
  plus: {
    color: "var(--clr_plus_color_dark)",
  },
  placeholder: {
    color: "var(--clr_text_placeholder_color_dark)",
  },
  item: {
    backgroundColor: "var(--clr_item_bg_dark)",
  },
  skeleton:{
    backgroundColor: "var(--clr_skeleton_bg_dark)",
    wrapper:{
      backgroundColor: "var(--clr_skeleton_wrapper_bg_dark)"
    }
  },
  shoppingList: {
    backgroundColor: "var(--clr_shopping_list_bg_dark)",
    category: {
      color: "var(--clr_shopping_list_category_dark)",
    },
    completeButton: {
      backgroundColor: "var(--clr_complete_button_bg_light)",
    },
    footer: {
      boxShadow: "var(--clr_shopping_list_footer_bg_dark)",
    },
    list: {
      backgroundColor: "var(--clr_shopping_list_options_bg_dark)",
    },
  },
};

export { lightTheme, darkTheme };
