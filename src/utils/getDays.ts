export const getDays = (index: number) => {
    const days = [
        'lunes',
        'martes',
        'miércoles',
        'jueves',
        'viernes',
        'sábado',
        'domingo',
    ];

    const day = new Date().getDay();

    return days[day+index]
}