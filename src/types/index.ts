import { z } from "zod"
import {CurrencyShema, CryptoCurrencyResponseSchema } from "../schema/crypto-schema"

export type Currency = z.infer<typeof CurrencyShema>
export type Cryptocurrency = z.infer<typeof CryptoCurrencyResponseSchema>

