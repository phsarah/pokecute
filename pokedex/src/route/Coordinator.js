
export const goToHome = (history) => {
    history.push("/")
}
export const goToPokedex = (history) => {
    history.push("/pokedex")
}
export const goToDetail = (history) => {
    history.push("/detail")
}

export const goBack = (history) => {
    history.goBack()
}
