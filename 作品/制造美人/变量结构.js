import { registerMvuSchema } from 'https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js';

export const Schema = z.object({
  时间系统: z.object({
    当前日期: z.string(),
    时间段: z.enum(['白天', '夜晚']),
    日期类型: z.enum(['工作日', '休息日']),
    学期状态: z.enum(['学期中', '寒假', '暑假'])
  }),

  好感度: z.object({
    林心悦: z.coerce.number()
      .transform(v => _.clamp(v, 0, 100))
      .describe('画皮中心院长，温柔专业的成熟女性'),
    付潇潇: z.coerce.number()
      .transform(v => _.clamp(v, 0, 100))
      .describe('大学生顾客，活泼直率的女孩'),
    祝伊伊: z.coerce.number()
      .transform(v => _.clamp(v, 0, 100))
      .describe('付潇潇的母亲，退役演员')
  }),
});

$(() => {
  registerMvuSchema(Schema);
})
