import {TicketKind} from "@prisma/client";

export class ReservarAssentoRequest {
    spots: string[];
    ticket_kind: TicketKind;
    email: string;
}
