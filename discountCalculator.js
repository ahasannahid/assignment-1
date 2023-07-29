function calculateDiscount (totalAmount){
    if(totalAmount < 50){
        console.log('No Discount Applicable')
    }else if(totalAmount >=50 && totalAmount < 100){
       let discount = totalAmount * 0.05
       let discountedAmount = totalAmount - discount;
       console.log(`Total Amount : ${totalAmount}`);
       console.log(`Discount : ${discount}`);
       console.log(`Discounted Amount : ${discountedAmount}`);
    }else if(totalAmount >=100 && totalAmount < 200){
        let discount = totalAmount * 0.1
        let discountedAmount = totalAmount - discount;
        console.log(`Total Amount : ${totalAmount}`);
        console.log(`Discount : ${discount}`);
        console.log(`Discounted Amount : ${discountedAmount}`);
     }else{
        let discount = totalAmount * 0.15
        let discountedAmount = totalAmount - discount;
        console.log(`Total Amount : ${totalAmount}`);
        console.log(`Discount : ${discount}`);
        console.log(`Discounted Amount : ${discountedAmount}`);
     }
}

calculateDiscount(35);
calculateDiscount(50);
calculateDiscount(60);
calculateDiscount(100);
calculateDiscount(150);
calculateDiscount(199);
calculateDiscount(250);