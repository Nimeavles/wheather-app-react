export const getDays = (index: number) => {
    const days = [
        'domingo',
        'lunes',
        'martes',
        'miércoles',
        'jueves',
        'viernes',
        'sábado',
    ];

    const day = new Date().getDay();

    return days[day+index]
}