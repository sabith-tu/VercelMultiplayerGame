import { InjectExtension } from "./Extension/Extension.js";
import * as S from './Extension/Extension_Composition.js';
InjectExtension();
const body = document.getElementById("body");
body.noPadding().noMargin()
    // .main()
    .fixedSizeV(100, 100);
body.append(S.Row(S.Rectangle(200).fixedHeightV(100).backgroundColor("red"), S.Column(S.Row(S.Rectangle(75, 50).text("SABI"), S.Create().flexExpand(), S.Rectangle(75, 50).text("Portfolio"), S.Rectangle(75, 50).text("Portfolio"), S.Rectangle(75, 50).text("Portfolio"), S.Rectangle(75, 50).text("Portfolio"), S.Create().flexExpand(), S.Rectangle(75, 50).text("Log in"), S.Rectangle(75, 50).text("About")).fixedHeight(60), S.Create()
    // .fixedHeightS("100%")
    .flexExpand()
    .borderRadius(10).backgroundColor("yellow").margin(10)).flexExpand() //.backgroundColor("green"),
).displayFlex().minWidthV(100).backgroundColor("black"));
