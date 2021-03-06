// Type definitions for stripe
// Project: https://stripe.com/
// Definitions by: Andy Hawkins <https://github.com/a904guy/,http://a904guy.com>, Eric J. Smith <https://github.com/ejsmith/>, Amrit Kahlon <https://github.com/amritk/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface StripeStatic {
    setPublishableKey(key: string): void;
    validateCardNumber(cardNumber: string): boolean;
    validateExpiry(month: string, year: string): boolean;
    validateCVC(cardCVC: string): boolean;
    cardType(cardNumber: string): string;
    getToken(token: string, responseHandler: (status: number, response: StripeTokenResponse) => void): void;
    card: StripeCardData;
    createToken(data: StripeTokenData, responseHandler: (status: number, response: StripeTokenResponse) => void): void;
    bankAccount: StripeBankAccount;
    subscriptions: StripeSubscriptions;
    customers: StripeCustomers;
}

interface StripeTokenData {
    number: string;
    exp_month?: number;
    exp_year?: number;
    exp?: string;
    cvc?: string;
    name?: string;
    address_line1?: string;
    address_line2?: string;
    address_city?: string;
    address_state?: string;
    address_zip?: string;
    address_country?: string;
}

interface StripeTokenResponse {
    id: string;
    card: StripeCardData;
    created: number;
    currency: string;
    livemode: boolean;
    object: string;
    used: boolean;
    error: StripeError;
}

interface StripeError {
    type: string;
    code: string;
    message: string;
    param?: string;
}

interface StripeCardData {
    object: string;
    last4: string;
    type: string;
    exp_month: number;
    exp_year: number;
    fingerprint: string;
    country?: string;
    name?: string;
    address_line1?: string;
    address_line2?: string;
    address_city?: string;
    address_state?: string;
    address_zip?: string;
    address_country?: string;
    createToken(data: StripeTokenData, responseHandler: (status: number, response: StripeTokenResponse) => void): void;
}

interface StripeBankAccount
{
    createToken(params: StripeBankTokenParams, stripeResponseHandler: (status:number, response: StripeBankTokenResponse) => void): void;
    validateRoutingNumber(routingNumber: number | string, countryCode: string): boolean;
    validateAccountNumber(accountNumber: number | string, countryCode: string): boolean;
}


interface StripeSubscriptions
{
    create(params: StripeSubscriptionParams, stripeResponseHandler: (err:Error, subscription: any) => void): void;
    retrieve(id: string, stripeResponseHandler: (err:Error, subscription: any) => void): void;
}

interface StripeSubscriptionPlan {
    id: string
    amount: number
    created: number    
}

interface StripeSubscriptionParams {
    customer: string
    plan: string
}

interface StripeCustomers
{
    create(params: StripeCustomerParams, stripeResponseHandler: (err:Error, customer: StripeCustomer) => void): void;
    retrieve(id: string, stripeResponseHandler: (err:Error, customer: StripeCustomer) => void): void;
}

interface StripeCustomerParams {
    source: string
    plan: string
    email: string
}

interface StripeCustomer {
    id: string
    created: number
    email: string
    subscriptions: StripeSubscriptionResponse
}

interface StripeSubscriptionResponse {
    object: string
    data: StripeSubscription[]
    has_more: boolean
    total_count: number
    url: string
}

interface StripeSubscription {
    id: string
    created: number,
    status: string
    plan: StripeSubscriptionPlan
}

interface StripeBankTokenParams
{
    country: string;
    currency: string;
    account_number: number | string;
    routing_number?: number | string;
    account_holder_name: string;
    account_holder_type: string;
}

interface StripeBankTokenResponse
{
    id: string;
    bank_account: {
        id: string;
        country: string;
        bank_name: string;
        last4: number;
        validated: boolean;
        object: string;
    };
    created: number;
    livemode: boolean;
    type: string;
    object: string;
    used: boolean;
    error: StripeError;
}

declare var stripe: StripeStatic;
declare module "stripe" {
    function createStripe(key:string): StripeStatic;
    export = createStripe;
}
