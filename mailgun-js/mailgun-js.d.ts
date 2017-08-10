// Generated by typings
// Source: https://raw.githubusercontent.com/Webinate/users/master/src/definitions/custom/mailgun.d.ts
import * as stream from "stream";

declare module MailGun
{
    export interface Mailer
    {
        send(data: {
            from: string,
            to: string,
            subject: string,
            text: string,
            attachment? : stream.Stream,
            'h:Reply-To'? : string,
        }, callback: ( error : Error, body: any ) => void );
    }

    /**
     * An instance of the mailgun api
     */
    export interface Instance
    {
        messages() : Mailer;
    }

    /**
     * Options for setting up the mailgun instance
     */
    export interface MailgunOptions
    {
        apiKey: string;
        domain: string;
    }

    var init : ( options: MailgunOptions) => Instance;
}

declare module "mailgun-js" {
  export = MailGun.init;
}

