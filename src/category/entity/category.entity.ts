import { Products } from 'src/products/entity/products.entity';
import { Subcategory } from 'src/subcategories/entities/subcategory.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

export enum CategoryStatus {
  ENABLE = 'enable',
  DISABLE = 'disable',
  DELETED = 'deleted',
}

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    type: 'varchar',
  })
  name: string;

  @Column({
    nullable: true,
    type: 'varchar',
  })
  image: string | null;

  @Column({
    type: 'enum',
    enum: CategoryStatus,
    default: CategoryStatus.ENABLE,
  })
  status: CategoryStatus;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Products, (products) => products.category)
  @JoinColumn()
  products: Products[];

  @OneToMany(() => Subcategory, (subcategory) => subcategory.category)
  @JoinColumn()
  subcategory: Subcategory[];
}