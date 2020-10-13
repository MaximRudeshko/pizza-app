export default class FakeApi{

    getPizzas = async (url) => {
        const res = await fetch(url);

        if(!res.ok){
            throw new Error(`Could not fetch ${url} : ${res.status}`)
        }

        return await res.json()
    }
}