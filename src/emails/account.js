const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'amianumair@gmail.com',
        subject:'Welcome to the TaskMangerApp',
        text:`Welcome to the App, ${name}.Let me know how you get along with the app`
    }).then(()=>{console.log("Email has been sent")},error=>console.log(error))    
}    


const sendCancelationEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'amianumair@gmail.com',
        subject:'Sorry to see you go',
        text:`Goodbye ${name} please tell us the reason for leaving so that we could improve our services. I hope to see you back sometime soon.`
    }).then(()=>{console.log("Email has been sent")},error=>console.log(error))    
}    


module.exports={sendWelcomeEmail,sendCancelationEmail}
