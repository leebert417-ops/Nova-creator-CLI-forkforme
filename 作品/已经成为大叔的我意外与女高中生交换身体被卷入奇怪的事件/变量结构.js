import { registerMvuSchema } from 'https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js';

export const Schema = z.object({
  世界: z.object({
    当前时间: z.string(),
    当前地点: z.string()
  }),

  当前角色: z.record(
    z.string().describe('角色名'),
    z.object({
      当前想法: z.string(),
      当前状态: z.string(),
      当前穿着: z.string()
    })
  ).prefault({}),

  白鸟樱: z.object({
    好感度: z.coerce.number().transform(v => _.clamp(v, 0, 100)),
    重要记忆: z.record(
      z.string().describe('事件名'),
      z.string()
    ).prefault({})
  })
});

$(() => {
  registerMvuSchema(Schema);
})
