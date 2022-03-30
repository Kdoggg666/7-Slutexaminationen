export async function getAllMenu() {

    try{
        const response = await fetch('https://5000-kdoggg666-7slutexaminati-jr3nwpnlc6p.ws-eu38.gitpod.io/api/beans');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}

export async function createMenu(data) {
    const response = await fetch(`https://5000-kdoggg666-7slutexaminati-jr3nwpnlc6p.ws-eu38.gitpod.io/api/beans`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({user: data})
      })
    return await response.json();
}