async function UseFetch({url,method="GET",body={},headers={}}){
    const response = null;
    try{
        if(!url){
            return response = {error : 'Url cannot be empty, Please provide a valid url'}
        }
        response = await fetch(url,{
            method:method,
            body:body,
            headers:headers
        })
        return response = {success:response}
    }catch(err){
        return response = {error:err}
    }
}

export default UseFetch