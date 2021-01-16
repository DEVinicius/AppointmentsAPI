import { Router } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { startOfHour, parseISO } from 'date-fns';

const appointmentRoute = Router();

const appointments = [];

appointmentRoute.post('/', (request, response) => {
    const { provider, date } = request.body;

    // dating save
    const parsedDate = startOfHour(parseISO(date));

    const appointment = {
        id: uuidv4(),
        provider,
        parsedDate,
    };

    appointments.push(appointment);

    return response.json({
        appointment,
    });
});

export default appointmentRoute;
