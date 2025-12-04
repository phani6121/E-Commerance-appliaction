
const backendDomine = "https://e-commerance-appliaction.vercel.app/"

const SummaryApi = {
    singUp: {
        url: `${backendDomine}/api/signup`,
        method: "POST"
    },
    logIn: {
        url: `${backendDomine}/api/login`,
        method: "POST"
    },
    current_user: {
        url: `${backendDomine}/api/user-details`,
        method: "GET"
    },
    logout_user: {
        url: `${backendDomine}/api/userLogout`,
        method: "GET"
    },
    allUser: {
        url: `${backendDomine}/api/all-user`,
        method: "GET"
    },
    updateUser: {
        url: `${backendDomine}/api/update-user`,
        method: "POST"
    },
    uploadProduct: {
        url: `${backendDomine}/api/upload-product`,
        method: "POST"
    },
    allProduct: {
        url: `${backendDomine}/api/get-product`,
        method: "GET"
    },
    updateProduct: {
        url: `${backendDomine}/api/update-product`,
        method: "POST"
    },
    categoryProduct: {
        url: `${backendDomine}/api/get-categoryProduct`,
        method: "GET"
    },
    categoryWiseProduct: {
        url: `${backendDomine}/api/category-product`,
        method: "POST"
    },
    productDetails: {
        url: `${backendDomine}/api/product-details`,
        method: "POST"
    },
    addToCartProduct: {
        url: `${backendDomine}/api/addToCart`,
        method: 'POST'
    },
    addToCartProductCount: {
        url: `${backendDomine}/api/countAddToCartProduct`,
        method: "GET"
    },
    addToCartProductView: {
        url: `${backendDomine}/api/view-cart-product`,
        method: "GET"
    },
    updateCartProduct: {
        url: `${backendDomine}/api/update-cart-product`,
        method: "POST"
    },
    deleteCartProduct: {
        url: `${backendDomine}/api/delete-cart-product`,
        method: "POST"
    },
    searchProduct: {
        url: `${backendDomine}/api/search`,
        method: "GET"
    },
    filterProduct: {
        url: `${backendDomine}/api/filter-product`,
        method: 'POST'
    }


}

export default SummaryApi;