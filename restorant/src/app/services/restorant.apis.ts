export class RestorantApis{
    private static RESTORANT_GATEWAY: string ='http://restorant.germanywestcentral.azurecontainer.io:4999/';
    public static CATEGORY:string= `${RestorantApis.RESTORANT_GATEWAY}item-service/category`;
    public static CATEGORY_ITEMS = (id:string):string=> `${RestorantApis.RESTORANT_GATEWAY}item-service/category/${id}/items`;
    public static ITEMS =(itemId:string):string => `${RestorantApis.RESTORANT_GATEWAY}item-service/items/${itemId}`;
    public static ORDER = `${RestorantApis.RESTORANT_GATEWAY}order`
    public static USER_LOGIN = `${RestorantApis.RESTORANT_GATEWAY}user-service/login`
    public static REGISTER_CLIENT = `${RestorantApis.RESTORANT_GATEWAY}user-service/register-client`
    public static REGISTER_EMPLOYEE = `${RestorantApis.RESTORANT_GATEWAY}user-service/register-employee`
    public static USER_UPDATE = `${RestorantApis.RESTORANT_GATEWAY}user-service`

}
