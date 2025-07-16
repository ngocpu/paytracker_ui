export const formatMonth = (date: Date): string => {
    return date.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric' 
    });
}