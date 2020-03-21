declare type JsonValue =  boolean | number | string | null | JsonArray | JsonObject;
declare interface JsonObject {  [key: string]: JsonValue; }
declare interface JsonArray extends Array<JsonValue> {}
