const config  = {};
/*[SERVER_HOST]*/
/*[SERVER_PORT]*/
if( process.env.NODE_ENV="development" )
{
    config.development={
        host:SERVER_HOST,
        port:SERVER_PORT,
        database:[{
            driver:"mysql",
            host:"127.0.0.1",
            port:3306,
            user:"root",
            password:"",
            dbname:"test",
        }],
        cache:[],
        proxy:{}
    }

}else
{
    config.production={
        host:SERVER_HOST,
        port:SERVER_PORT,
        database:[],
        cache:[],
        proxy:{}
    }
}
module.exports=config;