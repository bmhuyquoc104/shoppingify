import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
*,*::after,*::before{
margin:0;
padding:0;
box-sizing:border-box;
}

:root{
  /* Light theme */
  --clr_header_bg_light:#ffffff;
  --clr_button_bg_light:#f9a109;
  --clr_heading1_text_light:#34333a;
  --clr_text_light:#000000;
  --clr_body_bg_light:#fafafe;
  --clr_plus_color_light:#c1c1c4;
  --clr_text_placeholder_color_light:#BDBDBD;
  --clr_item_bg_light:#EB5757;
  --clr_header_button_light:#454545;
  --clr_shopping_list_bg_light:#fff0de;
  --clr_shopping_list_category_light:#828282;
  --clr_complete_button_bg_light:#56ccf2
  --clr_shopping_list_footer_bg_light:rgba(0,0,0,0.1);

  /* Dark theme */
  --clr_header_bg_dark:#000000;
  --clr_button_bg_dark:#f9a109;
  --clr_heading1_text_dark:#cbccc5;
  --clr_text_dark:#ffffff;
  --clr_body_bg_dark:#050501;
  --clr_plus_color_dark:#3e3e3b;
  --clr_text_placeholder_color_dark:#424242;
  --clr_item_bg_dark:#EB5757;
  --clr_header_button_dark:#bababa;
  --clr_shopping_list_bg_dark:#fff0de;
  --clr_shopping_list_category_dark:#7d7d7d;
  --clr_complete_button_bg_dark:#56ccf2
  --clr_shopping_list_footer_bg_dark:rgba(255,255,255,0.1);
}

#root{
  display: flex;
  flex-direction:row;
  min-height:100vh;
  width:100%;
  background-color:var(--clr_body_bg_light);
  font-family: 'Quicksand', sans-serif;
  }
`;

export default GlobalStyled;
