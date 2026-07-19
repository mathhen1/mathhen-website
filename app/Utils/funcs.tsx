export const scrollTo = (id: string): boolean => {
    if (document.getElementById(id)) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
        return true;
    }
    else {
        return false
    }
}