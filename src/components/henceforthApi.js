import superagentPromise from "superagent-promise";
import _superagent from "superagent";
// import pagination from "../context/reducers/pagination";



    const superagent = superagentPromise(_superagent, global.Promise);
    const API_ROOT = " https://horsebnb.com:3001/v1/api";

    const BUCKET_ROOT =
        "https://stagingacriamarket.s3.eu-central-1.amazonaws.com/uploads/"; //live
    const API_FILE_ROOT_MEDIUM = `${BUCKET_ROOT}images/medium/`;
    const API_FILE_ROOT_ORIGINAL = `${BUCKET_ROOT}images/original/`;
    const API_FILE_ROOT_SMALL = `${BUCKET_ROOT}images/small/`;
    const API_FILE_ROOT_AUDIO = `${BUCKET_ROOT}audio/`;
    const API_FILE_ROOT_VIDEO = `${BUCKET_ROOT}video/`;
    const API_FILE_ROOT_DOCUMENTS = `${BUCKET_ROOT}documents/`;

    const encode = encodeURIComponent;
    const responseBody = (res) => res.body;

    let token = null;
    const tokenPlugin = (req) => {
        if (token) {
            req.set("Authorization", `${token}`);
        }
    };

    const requests = {
        del: (url) =>
            superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
        get: (url) =>
            superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
        put: (url, body) =>
            superagent
                .put(`${API_ROOT}${url}`, body)
                .use(tokenPlugin)
                .then(responseBody),
        patch: (url, body) =>
            superagent
                .patch(`${API_ROOT}${url}`, body)
                .use(tokenPlugin)
                .then(responseBody),
        post: (url, body) =>
            superagent
                .post(`${API_ROOT}${url}`, body)
                .use(tokenPlugin)
                .then(responseBody),
    };

    const Auth = {
        editdata: (info) => requests.post("/current_user/update_profile", info),
        changespassword: (info) => requests.post("/current_user/change_password", info),
        getdata: (info) => requests.get("/current_user/show", info),
        login: (info) => requests.post("/login", info),
        signup: (info) => requests.post("/current_user/create", info),
        forgotPassword: (info) => requests.post("forgot-password", info),
        checkOtp: (info) => requests.post("check-email-otp", info),
        resetPassword: (info) => requests.post("reset/password", info),
        changePassword: (info) => requests.put("admin/change-password", info),
        createdraftlisting: (info) => requests.post("/own_listings/create_draft", info),
        Updatedlisting: (info) => requests.post("/own_listings/update", info),
        Uploadimage: (info) => requests.post("/upload/aws?storageType=5&environment=2&isDefaultAsset=0", info),
        getalllisting: (info) => requests.get("/listings/query?pub_type=1&perPage=8&page=1", info),
        montnlygetalllisting: (info) => requests.get("/listings/query?pub_type=2&perPage=8&page=1", info),
        Guestgetalllisting: (info) => requests.get("/listings/query?pub_type=4&perPage=8&page=1", info),
        Equestrian: (info) => requests.get("/listings/query?pub_type=3&perPage=8&page=1", info),
        Listid: (id) => requests.get(`/own_listings/show?id=${id}`),
        
    };

    export default {
        // token,
        // ContactUs,
        // Divident,
        // Faq,
        // Reports,
        Auth,
        // Administrator,
        // Staff,
        // Common,
        // Profile,
        // Dashboard,
        // Facility,
        // Listing,
        // Transaction,
        // PromoCode,
        // User,
        // Policies,
        // Creator,
        // Message,
        // Nfts,
        // API_ROOT,
        // API_FILE_ROOT_SMALL,
        // API_FILE_ROOT_MEDIUM,
        // API_FILE_ROOT_ORIGINAL,
        // API_FILE_ROOT_VIDEO,
        setToken: (_token) => {
          token = _token;
        },
      };