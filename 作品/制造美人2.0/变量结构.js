import { registerMvuSchema } from 'https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js';

export const Schema = z.object({
  世界: z.object({
    当前时间: z.string().prefault("2025年9月1日 下午4:30"),
    当前地点: z.string().prefault("润水妇产医院-特需诊疗室"),
    当前事件: z.string().prefault("刘奈妲复诊")
  }),
  陈环: z.object({
    好感度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(80),
    开发度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(50),
    当前着装: z.string().prefault("真丝旗袍"),
    当前状态: z.string().prefault("在家准备晚餐"),
    基因倾向: z.string().prefault("母性泛滥型")
  }),
  刘奈妲: z.object({
    好感度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(30),
    开发度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(40),
    当前着装: z.string().prefault("香槟色真丝衬衫"),
    当前状态: z.string().prefault("等待检查"),
    基因倾向: z.string().prefault("超级泌乳型")
  }),
  付娅: z.object({
    好感度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(90),
    开发度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(95),
    当前着装: z.string().prefault("洛丽塔裙"),
    当前状态: z.string().prefault("在南洋做实验"),
    基因倾向: z.string().prefault("完美进化型")
  }),
  关雅: z.object({
    好感度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(20),
    开发度: z.coerce.number().transform(v => _.clamp(v, 0, 100)).prefault(10),
    当前着装: z.string().prefault("幼儿园园服"),
    当前状态: z.string().prefault("上学中"),
    基因倾向: z.string().prefault("潜在超级泌乳型")
  })
});

$(() => {
  registerMvuSchema(Schema);
})