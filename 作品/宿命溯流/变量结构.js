import { registerMvuSchema } from 'https://testingcf.jsdelivr.net/gh/StageDog/tavern_resource/dist/util/mvu_zod.js';

export const Schema = z.object({
  时间系统: z.object({
    当前日期: z.string().describe('格式：1995年9月1日 星期五'),
    年份: z.coerce.number().describe('当前年份'),
    月份: z.coerce.number().describe('当前月份'),
    学期状态: z.enum(['学期中', '寒假', '暑假'])
  }),

  好感度: z.object({
    祝伊伊: z.object({
      数值: z.coerce.number()
        .transform(v => _.clamp(v, -100, 100))
        .describe('好感度数值，-100到100，0为普通朋友'),
      等级: z.enum(['陌生', '认识', '朋友', '好友', '暧昧', '恋人', '冷淡', '厌恶'])
        .describe('好感度等级描述'),
      备注: z.string().optional()
        .describe('当前关系状态的简要说明')
    }),
    陈姝: z.object({
      数值: z.coerce.number()
        .transform(v => _.clamp(v, 0, 100))
        .describe('母子亲情，基础值80'),
      等级: z.enum(['疏远', '普通', '亲密', '深厚'])
        .describe('亲情深度'),
      备注: z.string().optional()
        .describe('母子关系的变化说明')
    })
  }),

  宿命系统: z.object({
    宿命值: z.coerce.number()
      .transform(v => _.clamp(v, 0, 100))
      .describe('回忆梦境能量值，满100可触发绝对记忆梦境'),
    下一事件: z.string()
      .describe('下一个即将发生的与前世重合的大事件'),
    历史阶段: z.enum(['1995-高一', '1996-高二', '1997-高三', '1998-大学', '未来'])
      .describe('当前所处的历史阶段')
  }),

  角色状态: z.object({
    user状态: z.object({
      身体: z.enum(['健康', '疲惫', '生病', '受伤']),
      心情: z.enum(['平静', '开心', '焦虑', '悲伤', '愤怒', '困惑', '怀念']),
      当前位置: z.string().describe('所在地点')
    }),
    祝伊伊状态: z.object({
      发展路线: z.enum(['原历史-进入演艺圈', '新路线-未知', '待定'])
        .describe('她的人生轨迹是否已经改变'),
      重要节点: z.string().optional()
        .describe('最近发生或即将发生的重要事件')
    })
  }),

  世界变化: z.object({
    历史偏离度: z.coerce.number()
      .transform(v => _.clamp(v, 0, 100))
      .describe('当前世界与前世记忆的偏离程度，0为完全一致，100为完全不同'),
    重大改变: z.array(z.string())
      .describe('已经发生的与前世不同的重大事件列表')
  })
});

$(() => {
  registerMvuSchema(Schema);
})
