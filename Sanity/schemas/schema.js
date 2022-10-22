import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";
import blockContent from "./blockContent";
import navbar from "./navbar";
import banner from "./banner";
import blog from "./blog";

export default createSchema({
  name: "default",
  types: schemaTypes.concat([navbar,banner,blog]),
});
