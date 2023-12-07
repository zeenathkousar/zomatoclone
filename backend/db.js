const mongoose = require('mongoose');
const MongoURI = 'mongodb+srv://zomatozee:zomatozee@cluster0.xlrs6ke.mongodb.net/zomatodb?retryWrites=true&w=majority'
const mongoDB = async () => {
    await mongoose.connect(MongoURI).then(async () => {
        console.log('db connected')
        const fetchedData = await mongoose.connection.db.collection('fooditems');
        // console.log(`fetched data is ${fetchedData}`)
        // console.log('fetched data is:',  fetchedData.find({}).toArray() ) // u get output as it returning a promise - so add await.
        //  await fetchedData.find({}).toArray((e,data)=>{    
        //     if(e) console.log(e);
        //     else{
        //         global.fooditems=data;
        //         console.log(`data is :${global.fooditems}`)
        //     }
        // })
        await fetchedData.find({}).toArray(async function (err, data) {
            const foodCategory = await mongoose.connection.db.collection('foodCategory');
            foodCategory.find({}).toArray(function (err, catData) {
                if (data) {
                    global.fooditems = data;
                    global.foodCategory=catData;
                    // console.log(data)
                    // console.log(global.fooditems)

                }
                else {
                    console.log('error in fetching db')


                }
            })
        });
        // if(data) {
        //     global.fooditems=data;
        //     // console.log(data)
        //     // console.log(global.fooditems)

        // }
        // else{
        //     console.log('error in fetching db')
    }

    )}
module.exports = mongoDB;