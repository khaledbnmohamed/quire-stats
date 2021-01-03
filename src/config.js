
export const backendBaseUrl = process.env.REACT_APP_BACKEND_BASE_URL;

export const quireBaseUrl = process.env.REACT_APP_API_BASE_URL;
export const clientID = process.env.REACT_APP_CLIENT_ID;
export const isDev = process.env.NODE_ENV === "development";
export const clientSecret = process.env.REACT_APP_CLIENT_SECRET;
export const cookiesDomain = process.env.REACT_APP_COOKIES_DOMAIN;
export const SSOopenIdClaimedId = process.env.REACT_APP_SSO_OPEN_ID_CLAIMED_ID;
export const SSOopenIdIdentity = process.env.REACT_APP_SSO_OPEN_ID_IDENTITY;
export const SSOendPoint = process.env.REACT_APP_SSO_ENDPOINT;
export const callBackUrl = "login_callback";
export const appBaseUrl = process.env.REACT_APP_FRONTEND_URL;

export const MRN_JWT_COOKIE = "mrn_jwt";
export const COMPANY_DATA_COOKIE = "company_data";
export const EMPLOYEE_DATA_COOKIE = "employee_data";
export const QUIRE_ACCESS_TOKEN = "QUIRE_ACCESS_TOKEN";

export const qParams = () => [
  `client_id=${clientID}`,
  `redirect_uri=${encodeURIComponent(`${appBaseUrl}/${callBackUrl}`)}`
].join("&");

export const authenticationUrl = `${quireBaseUrl}/oauth?${(qParams())}`;


const endpoints = {
  retreive_token: "retireve_acces_token",
  tasks_of_project: "tasks",
  projects: "projects",
  daily_overview: "tasks/daily_overview",
  contracts_new: "contracts",
  contract_show: "contracts/:number",
  contract_edit: "contracts/:number",
  employee_new: "registeration",
  employee_login: "auth/login",
  auth_otp: "auth/authenticate_otp",
  resend_otp: "auth/resend_otp",
  send_reset_password_otp: "auth/send_reset_password_otp",
  change_mobile_number: "auth/change_mobile_number",
  search_employee: "absher_credentials/search",
  invite_employee_to_contract: "contracts/:number/invite_employee",
  contract_accept: "contracts/:number/accept",
  contract_reject: "contracts/:number/reject",
  contract_employer_accept: "contracts/:number/employer_accept",
  contract_employer_reject: "contracts/:number/employer_reject",
  contract_confirm: "contracts/:number/confirm",
  contract_delete: "contracts/:number",
  read_notification: "notifications/:id/read",
  sso_user_companies: "sso/user_companies",
  sso_user_login: "sso/sign_in",
  user_logout: "auth/logout",
  list_notifications: "notifications",
  list_payments: "payments",
  contract_pay: "contracts/:number/pay_contract_fees",
  contracts_remaining_quota: "contracts/:number/remaining_contracts_quota",
  contracts_list: "contracts",
  search_existing_employee: "absher_credentials",
  get_employee: "employees/:id",
  get_cities: "cities",
  get_skills: "skills",
  update_employee: "employees/:id",
  reset_password: "employees/:id/reset_password",
  gosi_job_titles: "gosi_job_titles",
  contract_total_hours_validation: "contracts/calculate_total_hours_validations",
  get_cancellation_reasons: "cancellation_reasons",
  cancel_contract: "contracts/:number/cancel",
  payments_feature_toggler: "features/takamol_payment/enabled",
  complete_profile: "companies/complete_profile",
  submit_registration_number: "companies/submit_registration_number",
  check_company_activity: "companies/check_company_activity",
  update_company: "companies/:id",
  company_show: "companies/:id",
  invite_company: "companies/invite",
  search_employers: "companies",
  invoices: "invoice_logs",
  employees_total_hours: "contracts/total_working_hours_per_employee",
  companies_total_hours: "contracts/total_working_hours_per_company",
  uploaded_documents: "companies/:id/uploaded_documents",
};

export function getApiUrl({
  endpoint, pathParams = {}, queryParams = {}, baseUrl = backendBaseUrl,
}) {
  let apiUrl = endpoints[endpoint];
  if (!apiUrl) throw new Error("Unknown endpoint given to 'getApiUrl' function");

  for (const [key, value] of Object.entries(pathParams)) {
    apiUrl = apiUrl.replace((`:${key}`), value);
  }
  // eslint-disable-next-line no-use-before-define
  apiUrl = apiUrlWithQueryParams(apiUrl, queryParams);
  return [baseUrl, apiUrl].filter((item) => item).join("/");
}

export const apiUrlWithQueryParams = (apiUrl, queryParams) => {
  if (typeof queryParams === "string") {
    return `${apiUrl}?${queryParams}`;
  }

  const queryParamsLength = Object.keys(queryParams).length;
  if (queryParamsLength > 0) {
    // eslint-disable-next-line no-param-reassign
    apiUrl += "?";
    let i = 1;// as we don't want to append '&' @ the end of the url
    for (const [key, value] of Object.entries(queryParams)) {
      if (Array.isArray(value)) {
        let j = 1;
        for (const val of Object.entries(value)) {
          const newKey = `${key}[]`;
          // eslint-disable-next-line no-param-reassign
          apiUrl += `${encodeURI(newKey)}=${val[1]}`;
          // this will check value of 'j' then increament it <3
          // eslint-disable-next-line no-plusplus
          if (j++ < value.length) {
            // eslint-disable-next-line no-param-reassign
            apiUrl += "&";
          }
        }
      } else {
        // eslint-disable-next-line no-param-reassign
        apiUrl += `${encodeURI(key)}=${value}`;
      }
      // this will check value of 'i' then increament it <3
      // eslint-disable-next-line no-plusplus
      if (i++ < queryParamsLength) {
        // eslint-disable-next-line no-param-reassign
        apiUrl += "&";
      }
    }
  }
  return apiUrl;
};
