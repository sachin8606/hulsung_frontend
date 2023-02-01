//  Apis


// Get product details through Id

const getProductDetailsbyID =(productID)=>{ 
    return(
    `getProductDetailsbyID(
    id:"${productID}"
  ){
    SKU
    productName
    description
    shortDescription
    rating
    ratingCount
    status
    urlKey
    manufacturerCountry
    featureProduct
    manufacturer
    deliveryTime
    shippingCharges
    codAvailable
    price
    specialPrice
    images{
        image
        baseImage
        smallImage
    }
    videos
  }`
    )
}

const allproducts = ()=>{
  return(
  `allproducts{
    id
    SKU
    productName
    price
    specialPrice
    images{
      image
    }
    rating
  }`
  )
}

const addtoCart = (data)=>{
  return(
  `mutation{
    addtoCart(
      user:"${sessionStorage.getItem("user")}"
      products:{
        productId:"${data}"
        quantity:1
  }
  ){
    user
  }`
  )
}


const showCart = (userId)=>{
  return(
  `showCart(
    user:"${userId}"
  ){
    products{
      productId
      quantity
    }
  }`
  )
}



const addproductreview = (reviewData)=>{
  return(
     `mutation{
      addproductreview(
      title : "${reviewData.title}",
      nickName:"${reviewData.nickname}",
      review :  "${reviewData.review}",
      type : "${reviewData.type}",
      product: "${reviewData.productId}",
      userId :  "${reviewData.userId}",
      status : ${reviewData.status},
      featured : ${reviewData.featured},
      ratings : ${reviewData.ratings},
      deliveryratings : ${reviewData.deliveryratings},
      allRating : ${reviewData.allRatings},
      media:[{
        image:"${reviewData.reviewImage}"
        video:"${reviewData.reviewVideo}"
        active:${reviewData.reviewactive}
      }]
     ){
      title
      nickName
      review
      type
      product
      userId
      status
      featured
      ratings
      deliveryratings
      allRating
   
      media{
        image
        video
        active
      }
     }
     `
  )
}


const addQuestion = (data)=>{
  return(
    `mutation{
      product: "${data.product}",
      user: "${data.user}",
      question: "${data.question}"
      mobileNo: "${data.mobileNo}",
      email: "${data.email}",
      active: "${data.active}",
      last_answer: "${data.last_answer}",
      created_at: "${data.created_at}"
    }
    `
  )
}
 

export {getProductDetailsbyID, allproducts, addtoCart, showCart, addproductreview, addQuestion};

