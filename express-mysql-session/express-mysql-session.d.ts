// Type definitions for express-mysql-session 
// Project: https://github.com/chill117/express-mysql-session
// Definitions by: Jeff Allen <https://github.com/trestletech>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../express-session/express-session.d.ts" />

declare module "express-mysql-session" {
    import expressSession = require ('express-session');

    function expressMysqlSession (es : any  ) : expressSession.Store;
    namespace expressMysqlSession {};
    export = expressMysqlSession;
}
